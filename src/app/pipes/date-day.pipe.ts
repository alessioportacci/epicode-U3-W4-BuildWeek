import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDay'
})
export class DateDayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'dd - MM - Y');
  }

}
