import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceString'
})
export class ReplaceStringPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace('_', '-');
  }

}
