import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repetido'
})
export class RepetidoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    
    if (value) {
      
    }


    return null;
  }

}
