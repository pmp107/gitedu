<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Redirect;
use DB;
use App\Post;
class PostController extends Controller
{

   

//laravel admin part
public function index2(){
    
    $posts=DB::table('posts')->get();

        return view('post',['posts'=>$posts]);
// return view('post',compact('posts'));
  

}


public function deletePost($id){
    DB::table('posts')->where('post_id',$id)->delete();
    return Redirect::to('post')->with('message','deleted!');
}




    public function report_status(Request $request, $id){
        $data= posts::find($post_id);

        if($data->status==0){

            $data->status=1;
        }
        else{
            $data->status=0;
        }

        $data->save();
        return Redirect::to('post')->with('message',$data->post_id.'Status has been changed successfully');


    }

     
    public function getPost()
  {
      $post=new Post();
      $data=$post->getPost();
  
   return response()->json($data);
   
  }

  public function addPost(Request $request)
    {


        $user=DB::table('users')->where('id',$request->u_id)->first();

        $post=new Post();
        $post->post=$request->post;
          $post->image=$request->image;
          $post->u_id=$user->id;
          $post->save();

          return response()->json(['message' => 'post uploaded in database'], 200);
    }
    
    public function insertFile(Request $request)
    {
   
      $image=$request->file('file');
      
    $new_image=$image->getClientOriginalName();
   
    $image->move(public_path("images"),$new_image);
 
    return response()->json(['message' => 'post saved in public path  '], 200);
    }

  
}
