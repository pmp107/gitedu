import { Pipe, PipeTransform } from '@angular/core';
import { IMusic } from './IMusic';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(items:IMusic[], searchText?:string): any {
     
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
