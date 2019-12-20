import { Component } from '@angular/core';
import { IMusic } from '../Shared/IMusic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',

})
export class MusicComponent {
  music: IMusic[];
  myfilter:string;
  flag:boolean;

  
  constructor(private r:Router) {
    this.flag=false;
    this.music = [{
      id: 1,
      imgUrl: "../assets/guitar.jpg",
      name: "MyMusic",
      songUrl: "../assets/songs/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
      category: "jazz",
      singer: "Akon",
      showImage: true,
      
    },
    {
      id: 2,
      imgUrl: "../assets/guitar.jpg",
      name: "YouryMusic",
      songUrl: "../assets/songs/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
      category: "jazz",
      singer: "Akon",
      showImage: true,
      
    },
    {
      id: 3,
      imgUrl: "../assets/guitar.jpg",
      name: "HisMusic",
      songUrl: "../assets/songs/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
      category: "jazz",
      singer: "Akon",
      showImage: true,
      
    }]
  }

  toggleImage(musics: IMusic) {
    musics.showImage = !musics.showImage;
  }


  editMusic(music:IMusic)
  {
    this.r.navigate(['editMusic/'+music.id]);
  }

  detailMusic(music:IMusic)
  {
    this.r.navigate(['musicDetails/'+music]);
  }
}