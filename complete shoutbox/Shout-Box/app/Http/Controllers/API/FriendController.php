<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\FriendList;
use Illuminate\Support\Facades\DB;

class FriendController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api',['except' => ['getFriendRequest']]);   
    }

    public function requestFriend(Request $request){
        DB::table('friends_list')->insert(
            ['user_id' => $request['user_id'],
            'send_by'=> $request['user_id'],
            'friend_id' => $request['friend_id'],
            'friendship_status'=>'pending']
        );
        DB::table('friends_list')->insert(
            ['user_id' => $request['friend_id'],
            'send_by'=>$request['user_id'],
             'friend_id' =>$request['user_id'] ,
            'friendship_status'=>'pending']
        );
        $success['message'] = "your friend requset has been sent";
        return response()->json(['success'=>$success,'uid'=>$request['user_id']
    ,'fid'=>$request['friend_id']], 200); 
    }


    public function acceptFriend(Request $request){
        DB::table('friends_list')
        ->where([
            ['user_id', $request['user_id']],
            ['friend_id',$request['friend_id']]
        ])->update(['friendship_status' => 'friend']);

        DB::table('friends_list')
        ->where([
            ['friend_id', $request['user_id']],
            ['user_id',$request['friend_id']]
        ])->update(['friendship_status' => 'friend']);
        $success['message'] = "friend request accepted";
        return response()->json(['success'=>$success,'uid'=>$request['user_id']
    ,'fid'=>$request['friend_id']], 200); 
    }


    public function rejectFriend(Request $request){
        DB::table('friends_list')
        ->where([
            
            ['user_id', $request['user_id']],
            ['friend_id',$request['friend_id']]
        ])
        ->delete();
        DB::table('friends_list')
        ->where([
            
            ['friend_id', $request['user_id']],
            ['user_id',$request['friend_id']]
        ])
        ->delete();
        $success['message'] = "friend request has been rejected";
        return response()->json(['success'=>$success,'uid'=>$request['user_id']
    ,'fid'=>$request['friend_id']], 200); 
    }

    public function removeFriend(Request $request){
        DB::table('friends_list')
        ->where([
            ['user_id', $request['user_id']],
            ['friend_id',$request['friend_id']]
        ])
        ->delete();
        DB::table('friends_list')
        ->where([
            ['friend_id', $request['user_id']],
            ['user_id',$request['friend_id']]
        ])
        ->delete();
        $success['message'] = "friend is removed";
        return response()->json(['success'=>$success,'uid'=>$request['user_id']
    ,'fid'=>$request['friend_id']], 200); 
    }

    public function getFriendRequest($id){
        $list=DB::table('friends_list')->select('users.id','users.firstname','users.lastname','users.profile_image')
        ->join('users','users.id','=','friends_list.user_id')
        ->where([
            ['friends_list.friend_id',$id],
            ['friends_list.send_by','!=',$id],
            ['friends_list.friendship_status','pending']
        ])->get();
        $success['message'] = 'friend requests came';
        return response()->json(['success'=>$success,'requests'=>$list],200);
    }

    public function getfriends(Request $request){
        $frnds = DB::table('friends_list')->select('users.id','users.firstname','users.lastname','users.profile_image')
        ->join('users','users.id','=','friends_list.friend_id')
        ->where([
            ['user_id',$request['id']],
            ['friendship_status','friend']
        ])->get()->toArray();
        $success['message'] = 'friends came';
        return response()->json(['success'=>$success,'friends'=>$frnds],200);
    }
}
