<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;
use Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request){ 
       
        $validator = Validator::make($request->all(), [
            'email' => 'required', 
            'password' => 'required|min:8', 
        ]);
        $user = DB::table('users')->where('email',$request['email'])->first(); 
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        
        elseif($user->user_type === 'admin'){
            if(Auth::attempt(['email' => $request['email'], 'password' => $request['password']])){ 
                
                 return redirect()->route('home');
            } 
            else{ 
                Session::flash('message', "Invalid Credentials");
                return redirect()->back();
            }
        }
        else{
            Session::flash('message', "Invalid User");
            return redirect()->back();
        }  
    }
}
