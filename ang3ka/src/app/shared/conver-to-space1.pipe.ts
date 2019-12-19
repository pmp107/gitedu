import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converToSpace1'
})
export class ConverToSpace1Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace(' ',args);
  }

}
