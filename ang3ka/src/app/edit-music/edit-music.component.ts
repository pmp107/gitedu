import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.scss']
})
export class EditMusicComponent implements OnInit {

  id:number;
  constructor(private a:ActivatedRoute) { 
    //this.id=this.a.snapshot.params.id;
    this.a.params.subscribe((p:Params)=>this.id=p.id);
    console.log(this.id);
    

  }

  ngOnInit() {
  }

}
