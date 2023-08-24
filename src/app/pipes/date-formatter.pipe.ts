import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'MMM yyyy');
  }

}
