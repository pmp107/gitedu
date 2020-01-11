<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\server;

class taskController extends Controller
{
    function add(Request $request)
    { 
        //$title =$request->input('title');
        $upload =$request->input('upload');
        $status = $request->input('status');
        //$date =$request->input('date');

        $server= new server();
        //$server->title=$title;
        $server->upload=$upload;
        $server->status=$status;
        //$server->date=$date;
       
        $server->save();
        return $server;
       
    }

    // function store(Request $request){
    //     $upload =$request->input('upload');
    //  //   $server->upload=$upload;
    //  Storage::server('uploads')->put('upload', $upload);
    //     return $request;
    // }

    function get()
    {

        $records =server::all();
        return response()->json($records);
    }

    function delete(Request $request)
    {
        $id =$request->input('id');
     $record=DB::delete("delete from servers where id=$id");
     $response =array('id'=>$id);
        return $response;
    }
    function getone(Request $request)
    {
        $id =$request->input('id');
     $record=server::find($id);
     return response()->json($record);
    }
}
