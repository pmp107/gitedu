<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Shout;
use App\Model\Report;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Response;

class ShoutController extends Controller
{
    //
    protected $user;
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getShouts','postFullshout']]);
        
    }

    
    public function  postShout(Request $request){
        
        $this->user = DB::table('users')->where('id','=',$request['user_id'])->first();
        $shout = new Shout;
        $shout->user_id = $request['user_id'];
        $shout->reported = false;
        $shout->description = $request['description'];
        $shout->save();
        $success['user'] = $this->user;
        $success['message'] = "your shout has been posted";
        return response()->json(['success'=>$success], 200); 

    }

    public function postFullshout(Request $request){
        // $file=$request->file('post');
        // $ext=$request->file('post')->getMimeType();
        // $responce=array($status="success");

        // $path=Storage::putFile('files', $file);
        // $responce=array($status="success",'\\'.'files/'.$path,$ext);
        // return json_encode($responce);

        $shout = new Shout;
        $shout->user_id = $request['user_id'];
        $shout->reported = false;
        $shout->description = $request['description'];
        $shout->save();
        $id = DB::getPdo()->lastInsertId();
        if($request->hasFile('post')){
            
            $post = $request->file('post');
            $filename = time().'.'.$post->getClientOriginalExtension();
            $path=Storage::putFile('files', $post);
            
            DB::table('contents')->insert([
                'content_type'=>$request['content_type'],
                'path'=>$path,
                'name'=>$filename,
                'shout_id'=> $id
            ]);

        }
        $success['message'] = "your shout has been posted";
        return response()->json(['success'=>$success,'id'=>$request['content_type']], 200); 
    }

    public function getShouts($id){
       
        $frnds = DB::table('friends_list')->where([
            ['user_id',$id],
            ['friendship_status','friend']
        ])->pluck('friend_id')->toArray();
        
        array_push($frnds, (int)$id);
        
        $lshouts = DB::table('shouts')->select('users.id','users.profile_image',
        'users.firstname','users.lastname','shouts.shout_id','shouts.description',
        'shouts.created_at','shouts.reported','contents.content_type','contents.name','contents.path')
        ->join('users','users.id','=','shouts.user_id')
        ->leftJoin('contents','contents.shout_id','=','shouts.shout_id')
        ->whereIn('shouts.user_id', $frnds)
        ->orderBy('shouts.created_at', 'desc');

        $shouts = DB::table('shouts')->select('users.id','users.profile_image',
        'users.firstname','users.lastname','shouts.shout_id','shouts.description',
        'shouts.created_at','shouts.reported','contents.content_type','contents.name','contents.path')
        ->join('users','users.id','=','shouts.user_id')
        ->rightJoin('contents','contents.shout_id','=','shouts.shout_id')
        ->whereIn('shouts.user_id', $frnds)
        ->orderBy('shouts.created_at', 'desc')
        ->union($lshouts)
        ->get();
        $success['message'] = "your shout has been received";
        return response()->json(['success'=>$success,'Shouts'=>$shouts,'fid'=>$frnds], 200);
    }
    public function reportShout(Request $request){
        
        $shouts = DB::table('shouts')->where([
            ['shout_id',$request['shout_id']],
            ['user_id','!=',$request['user_id']]
        ])->update(['reported' => true]);
        if($shouts !=0){
            $report = new Report;
            $report->reported_by = $request['user_id'];
            $report->shout_id = $request['shout_id'];
            $report->save();
            $success['message'] = "shout is reported";
        return response()->json(['success'=>$success,'Shouts'=>$shouts,'uid'=>$request['user_id']], 200);
   
        }
        $success['message'] = "shout is reported";
        return response()->json(['error'=>'user can\'t report its own shout'],200);
    }

    
}