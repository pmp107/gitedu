<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image" href="/icons/megaphone.png">
        <title>Shout-Box</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }
            .nav-bar {
                background: #008b8b;
                height: 62px;
                color: white;
                
            }
            .top-right {
                position: absolute;
                background: #008b8b;
                right: 10px;
                top: 18px;
                
            }

            .top-left {
                position: absolute;
                background: #008b8b;
                left: 10px;
                top: 18px;
            }

            .content {
                border:1px solid #008b8b;
                padding:10%;
                background:white;
                color:black;
                position:absolute;
                top:20%;
                left:30%;
                text-align: center;
            }
            .links > a {
                color: white;
                padding: 0 25px;
                font-size: 19px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
                display:inline;
            }
            a.disabled {
                color: #636b6f;
                pointer-events: none;
                cursor: default;
            }
            body{
                color: #fff;
                background: lightgrey;
                font-family: 'Roboto', sans-serif;
            }
            .form-control{
                height: 40px;
                box-shadow: none;
                color: #969fa4;
            }
            .form-control:focus{
                border-color: #5cb85c;
            }
            .form-control, .btn{        
                border-radius: 3px;
            }
            .signin-form{
                width: 400px;
                margin: 0 auto;
                padding: 110px 0;
            }
            .signin-form h2{
                color: #636363;
                margin: 0 0 15px;
                position: relative;
                text-align: center;
            }
            .signin-form h2:before, .signin-form h2:after{
                content: "";
                height: 2px;
                width: 30%;
                background: #d4d4d4;
                position: absolute;
                top: 50%;
                z-index: 2;
            }	
            .signin-form h2:before{
                left: 0;
            }
            .signin-form h2:after{
                right: 0;
            }
            .signin-form .hint-text{
                color: #999;
                margin-bottom: 30px;
                text-align: center;
            }
            .signin-form form{
                color: #999;
                border-radius: 3px;
                margin-bottom: 15px;
                background: #f2f3f7;
                box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
                padding: 30px;
            }
            .signin-form .form-group{
                margin-bottom: 20px;
            }
            .signin-form input[type="checkbox"]{
                margin-top: 3px;
            }
            .signin-form .btn{        
                font-size: 16px;
                font-weight: bold;		
                min-width: 140px;
                outline: none !important;
            }
            .signin-form .row div:first-child{
                padding-right: 10px;
            }
            .signin-form .row div:last-child{
                padding-left: 10px;
            }    	
            .signin-form a{
                color: #fff;
                text-decoration: underline;
            }
            .signin-form a:hover{
                text-decoration: none;
            }
            .signin-form form a{
                color: #5cb85c;
                text-decoration: none;
            }	
            .signin-form form a:hover{
                text-decoration: underline;
            } 
            .invalid-feedback{
                color:red;
            }
        </style>
    </head>
    <body>
        <div class="nav-bar">
            <div class="top-left links">
                <a href="/">ShoutBox
                <!-- <img src="megaphone.png"> -->
                </a>
            </div>
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="/">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif   
        </div>
        @guest
        <div class="signin-form">
            <form action="{{ route('login') }}" method="post">
                @csrf()
                <h2>Login</h2>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>       
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg btn-block">Sign In</button>
                </div>
                <div class="clearfix">
                    <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
                    @if (Route::has('password.request'))
                        <a class="pull-right" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    @endif
                </div>   
            </form>
            <div class="text-center">Don't already have an account? <a href="register">Sign up</a> first.</div>
        </div>
        @else
        <h2>Please go back to home...</h2>
        @endguest
    </body>
</html>
