<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Shouts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shouts', function (Blueprint $table) {
            $table->bigIncrements('shout_id')->unique();
            $table->timestamps();
            $table->boolean('reported');
            $table->longText('description')->nullable(); //migrate it 
            $table->bigInteger('user_id')->unsigned(); 
            $table->foreign('user_id')->references('id')->on('users'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {   
        Schema::table('shouts', function(Blueprint $table){
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('shouts');
    }
}
