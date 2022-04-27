import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToMath'
})
export class StrToMathPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return value.length;
  }

}
