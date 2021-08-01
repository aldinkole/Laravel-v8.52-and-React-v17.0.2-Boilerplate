<?php

use Illuminate\Support\Facades\Route;

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
/*
|--------------------------------------------------------------------------
| React Info
|--------------------------------------------------------------------------
| The "/{any}" in route is to prevent error 404 when you
| reload page on routes that are added with react-router-dom

*/

Route::get('{any}', function () {
     return view('index');
 })->where('any', '.*');
