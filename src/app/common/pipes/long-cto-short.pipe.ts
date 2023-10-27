import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longCtoShort'
})
export class LongCtoShortPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value;
  }

}
