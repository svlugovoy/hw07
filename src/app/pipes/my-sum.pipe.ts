import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySum',
  pure: false
})
export class MySumPipe implements PipeTransform {

  transform(array: number[]) {
    return array.reduce((a, b) => a + b );
  }

}
