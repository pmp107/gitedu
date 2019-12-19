import { Component, OnInit } from '@angular/core';
import { MusicComponent } from '../Music/music.component';
import { Imusic } from '../Shared/Imusic';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detailed-music',
  templateUrl: './detailed-music.component.html',
  styleUrls: ['./detailed-music.component.scss']
})
export class DetailedMusicComponent implements OnInit {

  musicd:Imusic[];
  obj1:Imusic;
  obj:MusicComponent;
  id:number;
  r:Router;
  constructor(private a:ActivatedRoute) {
    this.obj = new MusicComponent(this.r);
    this.a.params.subscribe((p:Params)=>this.id=p.id);
    console.log(this.id);
    
   }

   getDetail()
   {
     console.log("in funs");
     this.musicd=this.obj.returnmusic();
     this.obj1=this.musicd[this.id-1];
   }

   
  ngOnInit() {
   
    this.getDetail();
      
    
  }

}
