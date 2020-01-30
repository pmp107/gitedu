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

        padding:20px;
            background-image:linear-gradient(#e4eaaa,#83c7f5,#bbdef3);

    color:#b7bdac;
font-size:25px;
border:black;

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
                <div class="card-header"> <h1>Admin Dashboard</h1></div>

                <div class="row px-md-5"> 
                    <a  class="col px-md-5" href="#">UserList</a>
                    <a class="col px-md-5" href="/post">PostList</a>
            
                </div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>

                        @endif
                    <table class="table table-responsive">
                        <thead>
                             <tr>
            
                                <td> Name </td>
                                <td> Email</td>
                                <td> Status</td>
                                <td> ActionTobePerform </td>
                                <td> Delete</td>
                             </tr>
            
                        </thead>
                        <tbody>

                             @foreach($users as $user)
                             <tr>
                             @if($user->name !="admin")
                                    <th>{{$user->name}}</th>
                                    <th>{{$user->email}}</th>
                                    <th>@if($user->status == 0) Inactive @else Active  @endif</th>
                                    <th> <a href="{{route('status',['id'=>$user->id])}}">@if($user->status == 1) Inactive @else Active  @endif</a></th>
                                    <th> <a href="{{route('delete',['id'=>$user->id])}}"><button id='b1' class="btn btn-danger">
                                        
                                 
                                    delete </button></a></th>
                                    @endif


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
