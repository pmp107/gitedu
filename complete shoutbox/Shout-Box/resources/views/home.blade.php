@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-xs-3">
            <!-- <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif       
                </div>

            </div> 
            @if(count($errors)>0)
                <div class="row">
                    <ul>
                        @foreach($errors->all() as $error)
                        <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
            @endif-->
            <img src="/uploads/profile/{{ $user->profile_image }}" style="width:150px; height:150px; float:left;
            border-radius:50%; margin-top:20px; margin-right:25px;"><br><br><br><br><br><br><br><br>
            <h2 style="margin-top:10px;color:black;">{{ ucfirst($user->firstname) }}  {{ ucfirst($user->lastname) }}  </h2>
            <form enctype="multipart/form-data" action="/home" method="post" >
                @csrf()
                <label style="margin-top:10px;color:black;">Update profile Picture</label><br>
                <input style="margin-top:10px;color:black;" type="file" name="profile_image" onchange="javascript:$(this).siblings('input[type=submit]').click();">
                <input type="submit" class="pull-left btn btn-sm btn-primary" style="display:none;margin-top:7px;"><br>
            </form>
        </div>
        <div class="col-xs-9">
       
                    <div class="row text-center" >
                        <div class=" ">
                            <div class="inner-statistics-section col-xs-4 " style="margin-top:15px;background:lavender;border:1px solid black;">
                                <div class="statistics-icon  make-center">
                                    <!-- <span class="fa fa-credit-card"></span> -->
                                    <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
                                </div>
                                <p class="counter" style="color:black;">{{$req}}</p>
                                <h3 style="color:black;"> Users </h3>
                            </div>
                            <div class="inner-statistics-section col-xs-4 " style="border-radius:3px;margin-top:15px;border:1px solid black;background:lavender;">
                                <div class="statistics-icon  make-center">
                                    <span class="fa fa-bullhorn fa-3x"></span>
                                </div>
                              
                                <p class="counter" style="color:black;">{{ $totalPosts }}</p>
                                <h3 style="color:black;"> Shouts </h3>
                            </div>
                            <div class="inner-statistics-section col-xs-4 " style="margin-top:15px;border-radius:3px;background:lavender;border:1px solid black;">
                                <div class="statistics-icon make-center">
                                    <span  class="fa fa-bullhorn fa-3x"></span>
                                </div>
                                <p class="counter"style="color:black;">{{ count($reports)}}</p>
                                <h3 style="color:black;">Todays Shouts</h3>
                            </div>
                            
                            <div class="inner-statistics-section w3_counter_grid1 col-xs-12" style="margin-top:15px;border-radius:3px;background:lavender;border:1px solid black;">
                            
                                <h3 style="color:black;">Pending User Requests</h3>
                                <p class="counter" style="color:black;">{{ sizeof($pendingRequest) }}</p>

                                <p class="statistics-para-text">
                                @if(count($pendingRequest)>0)
                                <table class="table table-striped" border=1px; style="background:lightgrey;
                                color:black;">
                                    <thead >
                                        <tr >
                       
                                        <th scope="col" style=" text-align:center"  >User Name</th>
                                        <th scope="col" style=" text-align:center"  >Email id</th>
                                        <th scope="col" style=" text-align:center" >Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($pendingRequest->all() as $preq)
                                        <tr>
                                        <th >{{ ucfirst($preq->firstname)  }} {{ ucfirst($preq->lastname) }}</th>
                                        <td>{{ $preq->email }}</td>
                                        <td colspan="2"><a class="btn btn-success" href="/useradd/{{ $preq->id }}" >Approve</a>
                                        <a class="btn btn-danger" href="/userdelete/{{ $preq->id }}" >Reject</a>
                                        </td>
                                       
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    </table>
                                @endif
                                </p>
                            </div>
                            <div class="inner-statistics-section w3_counter_grid1 col-xs-12" style="background:lavender;margin-top:15px;border-radius:3px;border:1px solid black;">
                                    
                                <h3 style="color:black;">Reported Post</h3>
                                <p class="counter" style="color:black;">{{ sizeof($reports) }}</p>

                                <p class="statistics-para-text">
                                @if(count($reports)>0)
                                <table class="table table-striped" border=1px; style="background:lightgrey;
                                color:black;">
                                    <thead >
                                        <tr >
                                        <th style=" text-align:center">Shout by</th>
                                        <th style=" text-align:center">Shout</th>
                                        <th style=" text-align:center">Reported by</th>
                                        <th style=" text-align:center" colspan="2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($reports->all() as $report)
                                        <tr>
                                        <th >{{ucfirst($report->s_fname) }}{{ucfirst($report->s_lname)}}</th>
                                        <td>{{$report->description }}</td>
                                        <td>{{ucfirst($report->r_fname) }}{{ucfirst($report->s_lname)}}</td>
                                        <td><a class="btn btn-danger" href="/deleteShout/{{$report->shout_id}}" >Delete</a></td>
                                        <td><a class="btn btn-warning" href="/deleteReport/{{$report->shout_id}}" >Ignore</a></td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    </table>
                                @endif
                                </p>
                            </div>
                           
                        </div>
                        </div>
                      
                    </div>
                </div>
        </div>
    </div>
</div>  
       
 
@endsection
