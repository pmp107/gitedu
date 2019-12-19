import { Pipe, PipeTransform } from '@angular/core';
import { Imusic } from './Imusic';
@Pipe({
  name: 'searchMusic'
})
export class SearchMusicPipe implements PipeTransform {


  

  transform(musicArray: Imusic[],  searchText?: any): any {
    if(!musicArray){
      return [];
    }
    if(!searchText){
      return musicArray;
    }

    searchText=searchText.toLowerCase();
    return musicArray.filter(musicArray=>{
      let pname=  musicArray.name.toLowerCase();
      let data=pname.indexOf(searchText)!==-1;
      console.log(data);
      return data;
    })

  }


}
