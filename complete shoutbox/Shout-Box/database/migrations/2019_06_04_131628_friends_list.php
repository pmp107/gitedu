<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FriendsList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('friends_list', function (Blueprint $table) {
            $table->bigIncrements('id')->unique();
            $table->dateTime('became_friends_at')->nullable();
            $table->bigInteger('send_by')->unsigned(); 
            $table->bigInteger('user_id')->unsigned(); 
            $table->foreign('user_id')->references('id')->on('users');
            $table->bigInteger('friend_id')->unsigned()->nullable(); 
            $table->foreign('friend_id')->references('id')->on('users');
            $table->enum('friendship_status',['pending','friend']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {   
        Schema::table('friends', function(Blueprint $table){
            $table->dropForeign(['user_id','friend_id']);
        });
        Schema::dropIfExists('friends');
    }
}
