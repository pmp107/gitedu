import { Pipe, PipeTransform } from '@angular/core';
import { SuggestedUsers } from '../SuggestedUsers';


@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(items:SuggestedUsers[], searchText?:any): any {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(userArray=>{
      let pname=  userArray.name.toLowerCase();
      let data=pname.indexOf(searchText)!==-1;
      // console.log(data);
      return data;
    });
  }

}
