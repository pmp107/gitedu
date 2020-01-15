<?php

// use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::post('login', 'API\AppUsers@login');
// Route::post('register', 'API\AppUsers@register');
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'web',
], function ($router) {

    Route::post('login', 'API\AuthController@login');
    Route::post('register', 'API\AuthController@register');
    Route::post('logout', 'API\AuthController@logout');
    Route::post('refresh', 'API\AuthController@refresh');
    Route::post('me', 'API\AuthController@me');
    Route::get('test','API\AuthController@test');
    Route::post('shout','API\ShoutController@postFullshout');
    Route::get('shouts/{id}','API\ShoutController@getShouts');
    Route::post('profile/image','API\AuthController@postImage');
    Route::post('sendfriendRequest','API\FriendController@requestFriend');
    Route::get('getfriendRequest/{id}','API\FriendController@getFriendRequest');
    Route::post('search','API\AppUsers@searchUsers');
    Route::post('acceptfriend','API\FriendController@acceptFriend');
    Route::post('rejectfriend','API\FriendController@rejectFriend');
    Route::post('removefriend','API\FriendController@removeFriend');
    Route::post('getfriends','API\FriendController@getfriends');
    Route::post('reportShout','API\ShoutController@reportShout');
});