<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Auth;
use Image;

class HomeController extends Controller
{
    protected $user;
    protected $req;
    protected $reports;
    protected $pendingRequest;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->req = DB::table('users')
        ->where('registration_status','approved')->count();
        $this->reports =DB::table('reports')
        ->select('u2.firstname AS r_fname','u2.lastname AS r_lname',
        'u1.firstname AS s_fname','u1.lastname AS s_lname','shouts.shout_id',
        'shouts.description','reports.report_id','reports.created_at','reports.shout_id')
        ->join('users as u2','u2.id','=','reports.reported_by')
        ->join('shouts','shouts.shout_id','=','reports.shout_id')
        ->join('users as u1','u1.id','=','shouts.user_id')
        ->get();
        $this->pendingRequest=DB::table('users')->where('registration_status','=','pending')->get();
        $this->totalPosts=DB::table('shouts')->count();
    }
    function index(){
        return view('home',array('user' => Auth::user(),
        'req' => $this->req,'reports' => $this->reports,
        'pendingRequest' =>$this->pendingRequest,
        'totalPosts' =>$this->totalPosts));
    }
    //function for updating profile picture
     public function updateAvatar(Request $request){
        if($request->hasFile('profile_image')){
            $avatar = $request->file('profile_image');
            $filename = time().'.'.$avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300,300)->save(public_path('/uploads/profile/'.$filename ));
            $this->user = Auth::user();
            $this->user->profile_image = $filename;
            $this->user->save();
        }
        return view('home',array('user' => Auth::user(),
                                    'req' => $this->req,
                                    'reports' => $this->reports,
                                    'pendingRequest' =>$this->pendingRequest,
                                    'totalPosts' =>$this->totalPosts ));
    }

    //function for approving the users request
    function approveUser($id){
        $this->user = DB::table('users')
        ->where('id', $id)
        ->update(['registration_status' => 'approved']);
        $this->req = DB::table('users')
        ->where('registration_status','approved')->count();
        $this->pendingRequest=DB::table('users')->where('registration_status','=','pending')->get();
        return view('home',array('user' => Auth::user(),
                                    'req' => $this->req,
                                    'reports' => $this->reports,
                                    'pendingRequest' =>$this->pendingRequest,
                                    'totalPosts'=>$this->totalPosts  ));
 
    }
     //function for rejecting the users request
    
     function rejectUser($id){
        $this->user = DB::table('users')
        ->where('id', $id)
        ->delete();
        $this->pendingRequest=DB::table('users')->where('registration_status','=','pending')->get();
        return view('home',array('user' => Auth::user(),
                                    'req' => $this->req,
                                    'reports' => $this->reports,
                                    'pendingRequest' =>$this->pendingRequest,
                                    'totalPosts'=>$this->totalPosts  ));
    }

         //function for delete reported post
    
        //  function deleteShout($id){
        //     $this->user = DB::table('shout')
        //     ->where('id', $id)
        //     ->delete();
        //     $this->pendingRequest=DB::table('users')->where('registration_status','=','pending')->get();
        //     return view('home',array('user' => Auth::user(),
        //                                 'req' => $this->req,
        //                                 'reports' => $this->reports,
        //                                 'pendingRequest' =>$this->pendingRequest,
        //                                 'totalPosts'=>$this->totalPosts  ));
        // }
        public function deleteReportedShouts($sid){

            DB::table('shouts')->where('shout_id',$sid)->delete();
            $this->reports =DB::table('reports')
            ->select('u2.firstname AS r_fname','u2.lastname AS r_lname',
            'u1.firstname AS s_fname','u1.lastname AS s_lname','shouts.shout_id',
            'shouts.description','reports.report_id','reports.created_at','reports.shout_id')
            ->join('users as u2','u2.id','=','reports.reported_by')
            ->join('shouts','shouts.shout_id','=','reports.shout_id')
            ->join('users as u1','u1.id','=','shouts.user_id')
            ->get();
            return view('home',array('user' => Auth::user(),
                                    'req' => $this->req,
                                    'reports' => $this->reports,
                                    'pendingRequest' =>$this->pendingRequest,
                                    'totalPosts'=>$this->totalPosts ));
            
        }

        public function deleteReport($sid){
            DB::table('reports')->where('shout_id',$sid)->delete();
            DB::table('shouts')->where('shout_id',$sid)->update(['reported'=>false]);
            $this->reports =DB::table('reports')
            ->select('u2.firstname AS r_fname','u2.lastname AS r_lname',
            'u1.firstname AS s_fname','u1.lastname AS s_lname','shouts.shout_id',
            'shouts.description','reports.report_id','reports.created_at','reports.shout_id')
            ->join('users as u2','u2.id','=','reports.reported_by')
            ->join('shouts','shouts.shout_id','=','reports.shout_id')
            ->join('users as u1','u1.id','=','shouts.user_id')
            ->get();
            return view('home',array('user' => Auth::user(),
                                    'req' => $this->req,
                                    'reports' => $this->reports,
                                    'pendingRequest' =>$this->pendingRequest,
                                    'totalPosts'=>$this->totalPosts ));
        }
}
