import { Component } from '@angular/core';
import { Imusic } from '../Shared/Imusic';
import { Router } from '@angular/router';

@Component({
    selector:"app-muxic",
    templateUrl:"./music.component.html"
})

export class MusicComponent
{
   
MyMusic:Imusic[];

Myfilter:string;

constructor(private r:Router) {

   
    this.MyMusic=[{
        isShow:true,
        id:1,
        name:"tamanche pe disco",
        image:"../assets/Images/bk.jpg",
        musicCategory: "pop",
        song:"Disco",
        singer:"raftaar",
        musicurl:"../assets/music/m1.mp3"

    }
    ,{
        isShow:true,
        id:2,
        name:"Dhup chik",
        image:"../assets/Images/ck.jpg",
        musicCategory: "jazz",
        song:"Bolly",
        singer:"raftaar",
        musicurl:"../assets/music/m1.mp3"

    }
    ,{
          isShow:true,
        id:3,
        name:"twirk",
        image:"../assets/Images/dk.jpg",
        musicCategory: "jazz",
        song:"Bolly",
        singer:"raftaar",
        musicurl:"../assets/music/m1.mp3"

    }
     ]
}

toggleImage(MyMusic:Imusic):void
{
   // document.getElementById('id').style.visibility = "hidden";
    MyMusic.isShow=!MyMusic.isShow;
 
}

editMusic(music:Imusic)
{
    this.r.navigate(['editMusic/'+music.id]);
}

deleteMusic(music:Imusic)
{
    this.r.navigate(['deleteMusic/'+music.id]);

}

returnmusic():Imusic[]
{
    return this.MyMusic;
}
}