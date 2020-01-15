@extends('layouts.app')

@section('content')
<!-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> -->
<div class="signup-form">
            <form action="register" method="post">
                @csrf()
                <h2>Register</h2>
                <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                <div class="form-group ">
                    <div class="row">
                        <div class="col-xs-6 {{ $errors->has('firstname') ? 'has-error':''}}"><input type="text" class="form-control" name="firstname" placeholder="First Name" required="required" value="{{ Request::old('firstname') }}"></div>
                        @error('firstname')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <div class="col-xs-6 {{ $errors->has('lastname') ? 'has-error':''}}"><input type="text" class="form-control" name="lastname" placeholder="Last Name" required="required" value="{{ Request::old('lastname') }}"></div>
                        @error('lastname')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>        	
                </div>
                <div class="form-group {{ $errors->has('email') ? 'has-error':''}}">
                    <input type="email" class="form-control" name="email" placeholder="Email" required="required" value="{{ Request::old('email') }}">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group ">
                    <div class="row">
                        <div class="col-xs-6 {{ $errors->has('contact_no') ? 'has-error':''}}"> 
                            <input type="tel" class="form-control" name="contact_no" placeholder="Contact Number" required="required" value="{{ Request::old('contact_no') }}">
                            @error('contact_no')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="col-xs-6 {{ $errors->has('dob') ? 'has-error':''}}"> 
                            <input type="date" class="form-control" name="dob" required="required" value="{{ Request::old('dob') }}">
                            @error('dob')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                </div>
                <div class="form-group ">
                    <div class="row">
                        <div class="col-xs-6 {{ $errors->has('city') ? 'has-error':''}}">    
                            <input type="text" class="form-control" name="city" placeholder="City"  required="required" value="{{ Request::old('city') }}">
                            @error('city')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="col-xs-6 {{ $errors->has('state') ? 'has-error':''}}">
                            <input type="text" class="form-control" name="state" placeholder="State" required="required" value="{{ Request::old('state') }}">
                            @error('state')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>    
                </div>
                <div class="form-group ">
                    <div class="row">
                        <div class="col-xs-6 {{ $errors->has('country') ? 'has-error':''}}">
                            <input type="text" class="form-control" name="country" placeholder="Country" required="required" value="{{ Request::old('country') }}">
                            @error('country')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div> 
                        <div class="col-xs-6 radio">
                            <div class="form-radio">
                                <input type="radio" id="customRadioInline1" name="gender" value="male">
                                <label for="customRadioInline1">Male</label>
                            </div>
                            <div class="form-radio">
                                <input type="radio" id="customRadioInline2" name="gender" value="female">
                                <label for="customRadioInline2">Female</label>
                            </div>
                            @error('gender')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                </div>
                <div class="form-group {{ $errors->has('password') ? 'has-error':''}}">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group {{ $errors->has('confirm_password') ? 'has-error':''}}">
                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
                    @error('confirm_password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>        
                <div class="form-group">
                    <label class="checkbox-inline"><input type="checkbox" required="required"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
                </div>
            </form>
            <div class="text-center">Already have an account? <a href="/">Sign in</a></div>
        </div>
@endsection
