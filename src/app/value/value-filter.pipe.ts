import { Pipe, PipeTransform } from '@angular/core';
import { Value } from '../models/value';

@Pipe({
  name: 'valueFilter'
})
export class ValueFilterPipe implements PipeTransform {

  transform(value: Value[], filterText: string): Value[] {
    
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:Value)=>p.name?.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
