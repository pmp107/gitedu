<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Contents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->bigIncrements('content_id')->unique();
            $table->enum('content_type',['audio','image','video','application']); //migrate
            $table->string('path');
            $table->string('name');
            $table->bigInteger('shout_id')->unsigned(); 
            $table->foreign('shout_id')->references('shout_id')->on('shouts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contents', function(Blueprint $table){
            $table->dropForeign(['shout_id']);
        });
        Schema::dropIfExists('contents');
    }
}
