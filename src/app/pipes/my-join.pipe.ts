import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myJoin',
  pure: false
})
export class MyJoinPipe implements PipeTransform {

  transform(array: string[], key: string) {
    let result = array.map((el) => {
      if (!key) {
        return el;
      } else {
        return el[key];
      }
    });
    return result.join(' # ');
  }

}
