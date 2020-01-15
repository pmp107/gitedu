<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FriendList extends Model
{
    protected $table = 'friends_list';

    protected $fillable = [ 'friend_id' , 'user_id','friendship_status'];
}
