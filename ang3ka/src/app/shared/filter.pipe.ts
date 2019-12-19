import { Pipe, PipeTransform } from '@angular/core';
import { imusic } from './imusic';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(items:imusic[], searchText?:string): any {
     
//     if(!items)return [];
//     if(!searchText) return items;
//     searchText=searchText.toLowerCase();

// return items.filter(item=>{
//   let mname=item.name.toLowerCase();
//   return mname.indexOf(searchText)!==-1;
// });

if(!items) return [];
    if(!searchText) return items;
console.log("hello");
searchText = searchText.toLowerCase();
return items.filter( it => {
  let mname=it.name.toLowerCase();
  return mname.indexOf(searchText)!==-1;
   
    });

  }

}
