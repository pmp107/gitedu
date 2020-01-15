<?php

namespace App\Http\Controllers\API;

use App\User;
use Validator;
use Image;
use App\Model\Shout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{   
    
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    protected $user;
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {   
        
        $credentials = request(['email', 'password']);


        $newuser =  DB::table('users')->where('email',$credentials['email'])->first();
        if($newuser->user_type == 'customer' && $newuser->registration_status === 'pending'){ 
            return response()->json(['error'=>'your login request has not been approved yet'], 401);
        }
        elseif($newuser->user_type === 'customer' && $newuser->registration_status ==='approved'){
            
            if (! $token = auth('api')->attempt($credentials)) {
                return response()->json(['error' => 'Email or password doesn\'t exist.'], 401);
            }

            return $this->respondWithToken($token);
        }
        else{
            return response()->json(['error'=>'Invalid User'], 401);
        }
    }

    public function register(Request $request){

        $validator = Validator::make($request->all(), [ 
            'firstname' => 'required',
            'lastname' => 'required',
            'dob' => 'required',
            'gender' => 'required',
            'contact_no' => 'required',
            'email' => 'required|email|unique:users', 
            'city' => 'required',
            'country' => 'required',
            'state' => 'required',
            'password' => 'required|min:8', 
            'confirm_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $request_input = $request->all(); 
        $request_input['password'] = bcrypt($request_input['password']);
        $new_input = array(
            'registration_status'=>'pending',
            'user_type'=>'customer');
        $final_input=array_merge($request_input, $new_input);
        User::create($final_input); 
        // User::create($request->all());
        return response()->json(['success'=>'You have been registered successfully'], 200); 

    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth('api')->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {   $this->user=auth('api')->user()->get()->toArray();
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            // 'expires_in' => $this->guard()->factory()->getTTL() * 60,
            'user' => auth('api')->user(),
        ]);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }

    public function postImage(Request $request){

        if($request->hasFile('profile_image')){
            $avatar = $request->file('profile_image');
            $filename = time().'.'.$avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300,300)->save(public_path('/uploads/profile/'.$filename ));
            DB::table('users')->where('id','=',$request['id'])->update(['profile_image' => $filename]);
            $this->user = DB::table('users')->where('id','=',$request['id'])->get();
            $success['id']= $request['id'];
            $success['user'] = $this->user[0];
            $success['message'] = "your profile image has been posted";
            return response()->json(['success' =>$success ],200);
        }
        else
        {
            return response()->json(['error' =>'image can\'t be uploaded' ],500);
        }
    }
}
