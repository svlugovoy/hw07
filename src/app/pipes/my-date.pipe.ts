import { Pipe, PipeTransform } from '@angular/core';
import {Timestamp} from 'rxjs/operators/timestamp';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: number, locale: string, options: object) {
    return new Date(value).toLocaleString(locale, options);
  }

}
