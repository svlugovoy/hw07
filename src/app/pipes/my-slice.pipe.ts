import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySlice'
})
export class MySlicePipe implements PipeTransform {

  transform(value: string, start: number = 0, end: number = value.length - 1) {
    const result = value.slice(start, end);
    return result;
  }

}
