
<style>

body{
                
                background-size: 100%;
                   background-repeat: no-repeat;
                   width:100%;
                   height: 100%;  
                   margin: 125px 0px 0px 0px ;
                   position: fixed;

                   background-image: linear-gradient(#e4eaee,#83c7f5,#bbdef3);
       }

       .card{

        background-image:linear-gradient(#e4eaaa,#83c7f5,#bbdef3);
            border-radius: 25px;
            text-align:center;
}
.card-header{
   text-align:center;
   font-size:40px;
}





</style>

@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">

            @if(session('message'))

                <div class="alert alert-success">
                     {{session('message')}}
                </div>
            @endif
            <div class="card">
                <div class="card-header"> Admin Dashboard </div>

                <div class="row px-md-5"> 
                    <a  class="col px-md-5" href="/home">UserList</a>
                    <a class="col px-md-5" href="#">PostList</a>
            
                </div>


                    <div class="card-body">
   
                    <table class="table table-responsive">
                        <thead>
                             <tr>
            
                                <td> Post_id </td>
                                <td> ReportStatus</td>

                                <td>Posts</td>
                                <td>image</td>
                                
                                <td> Delete</td>
                             </tr>
            
                        </thead>
                        <tbody>

                             @foreach($posts as $post)
                             <tr>
                                    <th>{{$post->post_id}}</th>
                                
                                    <th> <a href="{{route('report_status',['post_id'=>$post->post_id])}}">@if($post->status == 0) NotReported @else Reported  @endif</th>  
                                    <th>{{$post->post}}</th>
                                    <th>{{$post->image}}</th>
                                    <th> <a href="{{route('deletePost',['post_id'=>$post->post_id])}}"><button class="btn btn-danger">delete</button></a></th>


                             </tr>   
                            @endforeach    
            
                         </tbody>
    
                    </table>
                                   
                                    
                                    
                    

                 
                </div>
            </div>
        </div>
    </div>
</div>



@endsection
