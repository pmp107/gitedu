<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/status/{id}','HomeController@status')->name('status');
Route::get('/delete/{id}','HomeController@delete')->name('delete');



//POSTLIST

Route::get('/post', 'PostController@index2')->name('post');
Route::get('report_status/{post_id}','PostController@report_status')->name('report_status');
Route::get('deletePost/{post_id}','PostController@deletePost')->name('deletePost');



Route::get('/getPost','Postcontroller@getPost');


Route::get('/getcurrent','listController@current');

 Route::get('/getlist','listController@friends');
 Route::get('/getlist/friends','listController@list');