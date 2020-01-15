<?php

namespace App\Http\Controllers;
use App\registeruser;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JwtException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;


class usercontroller extends Controller
{
   
    public function login(Request $request)
    {
      
        $credentials=$request->json()->all();

        try{
           
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json(['error'=>'invalid_credentials'],400);
            }
        }
        catch(JWTException $e)
        {
            return response()->json(['error'=>'could_not_create_token'],500);
        }
        return response()->json(compact('token'));
    }


    public function register(Request $request)
    {
      
        $validator=Validator::make($request->json()->all(),
        [
            'username'=>'required|string|max:255',
            'email'=>'required|string|email|max:255|unique:users',
            'password'=>'required|string|min:6',
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors()->toJson(),400);
        }
        $user =registeruser::create([
            'username'=>$request->json()->get('username'),
            'email'=>$request->json()->get('email'),
            'password'=>Hash::make($request->json()->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);
    return response()->json(compact('user','token'),201);
    }
    

   
    public function getAuthenticatedUser()
    {
        try{
if(!$user == JWTAuth::parseToken()->authenticate())
{
    return response()->json(['user_not_found'],404);
}
        }
        catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e)
        {
            return response()->json(['token_expired'],$e->getStatusCode());
        }
        catch(Tymon\JWTAuth\Exceptions\TokenInvalidException $e)
        {
            return response()->json(['token_Invalid'],$e->getStatusCode());
        }
        catch(Tymon\JWTAuth\Exceptions\JWTException $e)
        {
            return response()->json(['token_absent'],$e->getStatusCode());
        }
        return response()->json(compact('registeruser'));

    }
    

}

