


<?php
use Illuminate\Http\Request;
Route::group([

    'middleware' => 'api',


], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    
//kanchan upload
Route::post('add','taskController@add');
Route::get('get','taskController@get');
Route::post('delete','taskController@delete');
Route::post('getone','taskController@getone');

});


//kanchan upload
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
