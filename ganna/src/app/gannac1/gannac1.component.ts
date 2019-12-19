import { Component } from '@angular/core';
import { imusic } from 'src/shared/imusic';

@Component({
  selector: 'app-gannac1',
  templateUrl: './gannac1.component.html',
  styleUrls: ['./gannac1.component.css']
})
export class Gannac1Component  {
 obj1:imusic[];
 myfilter:string;

 constructor(){ 
  this.obj1=
 [{
     name:'anand',
     city:'mumbai',
     image:"../assets/download.jpg",
     music:"../assets/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
     showImage:true,
     
   },
   {
    name:'Prathamesh',
    city:'mumbaiii',
    image:"../assets/download.jpg",
    music:"../assets/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
    showImage:true,
  },
  {
    name:'Akshay',
    city:'mumbaiiiiiiii',
    image:"../assets/download.jpg",
    music:"../assets/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
    showImage:true,
  },
  {
    name:'Heaml',
    city:'mumbaiiiiiiii',
    image:"../assets/download.jpg",
    music:"../assets/Cheap Thrills (feat. Sean Paul) (Mp3Beet.Com) - 192Kbps.mp3",
    showImage:true,
  }
  ];
}
toggleImage(obj1:imusic){
  
  obj1.showImage=!obj1.showImage;
}
}