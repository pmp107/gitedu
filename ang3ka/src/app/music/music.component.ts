import { Component } from '@angular/core';
import { imusic } from '../shared/imusic';



@Component({
    selector:'app-music',
    templateUrl:'./music.component.html'
})


export class musicComponent{
    mymusic:imusic[];
    myfilter:string;
   
 public date=new Date();
    
   
    constructor()
    {
       
        flag:Boolean:true;
        this.mymusic=[{

            id:1,
            name:"cute munda",
            image:"../assets/cutemunda.jpg",
            singer:"sharry mann",
            category:"punjabi",
            duration:3.4,
            url:"../assets/abc.mp3",
            showImage:true,
         

        },
        {
            id:2,
            name:"see you again",
            image:"../assets/img.jpg",
            singer:"wiz khalifa",
            category:"pop",
            duration:4.3,
            url:"../assets/abc.mp3",
            showImage:true,
           
        },
        {

            id:3,
            name:"humsafar",
            image:"../assets/img3.jpg",
            singer:"Arijit singh",
            category:"Love",
            duration:4.0,
            url:"../assets/abc.mp3",
            showImage:true,
         

        },
        {

            id:4,
            name:"Nikale current",
            image:"../assets/img4.jpg",
            singer:"neha Kakkar",
            category:"punjabi",
            duration:4.0,
            url:"../assets/abc.mp3",
            showImage:true,
      

        },
        {

            id:5,
            name:"high rated gabru",
            image:"../assets/images.jpg",
            singer:"guru randhwa",
            category:"punjabi",
            duration:4.0,
            url:"../assets/abc.mp3",
            showImage:true,
           

        },
        {

            id:6,
            name:"tu jaane na",
            image:"../assets/img5.jpg",
            singer:"Atif aslam",
            category:"sufi",
            duration:4.0,
            url:"../assets/abc.mp3",
            showImage:true,
           

        },
        {

            id:7,
            name:"jane kyun log",
            image:"../assets/img6.jpg",
            singer:"Lata Mangeshkar",
            category:"Devotional",
            duration:4.0,
            url:"../assets/abc.mp3",
            showImage:true,
          

        }
    ]
    }
    
 
myfunction(mymusic:imusic)
{
    flag:true;
    mymusic.showImage=!mymusic.showImage;
}

playsong()
{


}


}

    


