import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../iuser';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(items:Iuser[], searchText?:any): any {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(userArray=>{
      let pname=  userArray.username.toLowerCase();
      let data=pname.indexOf(searchText)!==-1;
      console.log(data);
      return data;
    });
  }

}
