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
})->name('/');

Auth::routes();
Route::post('/loginAdmin','Auth\LoginController@login')->name('loginAdmin');
Route::get('/useradd/{id}','HomeController@approveUser');
Route::get('/userdelete/{id}','HomeController@rejectUser');
Route::get('/deleteReport/{sid}','HomeController@deleteReport');
Route::get('/deleteShout/{sid}','HomeController@deleteReportedShouts');
Route::get('/home', 'HomeController@index')->name('home');
Route::post('home', 'HomeController@updateAvatar')->name('home');
 