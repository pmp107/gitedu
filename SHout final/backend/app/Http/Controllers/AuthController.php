<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use DB;

use App\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        
        $credentials = request(['email', 'password']);

         $data= DB::table('users')->where('email',$credentials)->value('status');
    // //    User::($credentials['email']);
    //    // echo($data);
    //     if($data->status === 0){
    //         return response()->json(['message' => 'admin approval required'], 200);

    //     }
        // $data->status=1;
        
       if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or Password dosen\'t exists'], 401);
        }
        if($data==0)
        {
            return response()->json(['error'=>'admin approval required'],401);
        }

    return $this->respondWithToken($token);

//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU3OTAwNTYzMiwiZXhwIjoxNTc5MDA5MjMyLCJuYmYiOjE1NzkwMDU2MzIsImp0aSI6InVpRncwZHpWbnMzUUFGdmsiLCJzdWIiOjYsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.BgewwCdECYs70Jtq_C45-XxpnY9cm7sOpnyfq0Q6PoY"
    }


    // }
    public function login2($request)
    {
        
        $credentials = request(['email', 'password']);

       if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or Password dosen\'t exists'], 401);
        }
        //return response()->json(['message' => 'you have been successfully registered'], 200);

     return $this->respondWithToken($token);
    }

  public function signup(SignUpRequest $request)
  {
    User::create($request->all());
     return $this->login2($request);
    // return $this->respondWithToken($token);
  }


    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth('api')->user()
        ]);
        
    }
}