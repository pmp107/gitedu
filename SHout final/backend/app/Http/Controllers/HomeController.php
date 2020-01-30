<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Illuminate\Support\Facades\Redirect;

use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('api');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users=DB::table('users')->get();
        return view('home',['users'=>$users]);
    }

    public function getlogin()
    {
        return view('auth.login');
    }

    public function status(Request $request, $id){
        $data= User::find($id);

        if($data->status==0){

            $data->status=1;
        }
        else{
            $data->status=0;
        }

        $data->save();
        return Redirect::to('home')->with('message',$data->name.'Status has been changed successfully');



    }

    public function delete($id){
        DB::table('users')->where('id',$id)->delete();
        return Redirect::to('home')->with('message','deleted!');
    }


    




    



    
}
