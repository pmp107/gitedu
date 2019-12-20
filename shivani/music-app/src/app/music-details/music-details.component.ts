import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMusic } from '../Shared/IMusic';


@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {
 music:IMusic;
  constructor(private a:ActivatedRoute) { 
    this.music = {
      id: 1,
      imgUrl: "../assets/guitar.jpg",
      name: "MyMusic",
      songUrl: "../assets/songs/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
      category: "jazz",
      singer: "Akon",
      showImage: true,
      
    }

    this.a.params.subscribe((p:Params)=>this.music.id=p.id);
  }

  ngOnInit() {
  }

}
