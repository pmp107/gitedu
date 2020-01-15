<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Reports extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->bigIncrements('report_id')->unique();
            $table->timestamps();
            $table->bigInteger('reported_by')->unsigned();
            $table->foreign('reported_by')->references('id')->on('users');
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
        Schema::table('reports', function(Blueprint $table){
            $table->dropForeign(['shout_id']);
            $table->dropForeign(['reported_by']);
        });
        Schema::dropIfExists('reports');
    }
}
