<?php

namespace App\Http\Controllers;
use App\User;
// use App\friends;
//use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;

class listController extends Controller
{
    
    
      public function list()
    {
       // $records =User::all()
       $records = User::where('status','=',1)->get();
    //    $curuser=DB::where('users')->find('email',$request->email)->first();
        return response()->json($records);
    }

        // public function friends()
        // {
        //     return response()->json(Auth::user());
        // }

   

        public function current(Request $request)
        {
            $curuser=DB::where('users')->find('email',$request->email)->first();
                    return response()->json($curuser); 
        }

        // function add(Request $request)
        // {
        //     DB::table('friends')->insert(
        //         [
        //             'user_id'=>$request['user_id'],
        //             'send_by'=>$request['user_id'],
        //             'friend_id'=>$request['friend_id'],
        //             'friend_status'=>'pending'
                
                
        //         ]
        //         );
        //         $success['message']="your friend request has been sent";
        //         return reponse()->json(['success'=>
        //         $success,'u_id'=>$request['user_id'],
        //         'f_id'=>$request['friend_id']],200);
        // }


}
   
// public function friends()
// {
//     return response()->json(Auth::user());
// }

    // function add(Request $request)
    // {
       
    //     // $loggedUser=Auth::User;
    //     $friend =friends::create([
    //         'friend_id'=>$request->input('friend_id'),
    //         'user_id'=>$request->input('user_id'),
    //         'status'=>$request->input('status'),
    //     ]);
    //     $friend->save();
    //     return ['message' => 'ok'];
    // }

    // function add(Request $request)
    // {
    //     // echo($request->user_id);  
    //     $friendtoadd=User::find('id');
    //     Auth::user()->addfriendbyId($request->friendtoadd);

    // //     $friend =User::create([
    // //   'friend_id'=>$request->input('friend_id')]);


        
    //    // $loggedUser=Auth::user();
    //     // print_r($loggedUser);
    //     // exit();
    //    // $loggeduser->addfriendbyId($friendtoadd->id);
    //     return response()->json([
    //         'success'=>true
    //     ]);
    //     //$friend=friends::create();


    //     }
    
     // public function add(Request $request)
    // {
    //   //  Auth::user()->addfriendbyId($request->id);
    
    //     $loggedUser=Auth::User();
    //     $friend =User::create([
    //                 'friend_id'=>$request->input('friend_id'),
    //              'user_id'=>$loggedUser,
                
    //              'status'=>$request->input('status')
    //             ]);
    //             $friend->save();
    //             return response()->json([
    //                         'success'=>true
    //                     ]);
    // }


// public function add(Request $request)
// {
//    print_r(response()->json(auth()->user())) ;
//    exit();
//  // echo( $friendToadd=User::find($request));
//   $friendToadd=User::find($request);
//   $loggeduser=DB::where('users')->find('email',$request->email)->first();
//   return response()->json($loggeduser); 
// }
    // if(!$friendToadd)
    // {
    //     return response()->json(['error'=>"there is no user"],400);
    // }

    // if($friendToadd->data === $loggedUser->)
    // {
    //     return response()->json(['error'=>"you cant add yourself"],400);

    // } 
    // if($loggedUser->hasfriends_id($friendToadd->data)){
    //     return response()->json(['error'=>"you are friends already"],400);

    // }

    //  addfriendbyId($friendToadd->id);
    
    // $loggedUser->addfriendbyId();

    // return response()->json([
    //     'success'=> true
    // ]);


