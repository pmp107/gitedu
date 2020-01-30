<?php

namespace App;
use DB;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable=['u_id','post','image'];
    
    protected $primaryKey = 'post_id';
    function getPost()
    {
        $data=DB::table('posts')->get();
          return $data;
    }

    function addPost($data)
    {
       
        DB::table('posts')->insert($data);
    
      
        //  $new_image=rand().'.'.$image->getClientOriginalExtension();
        
    }
    

}
