import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sex'})

export class SexPipe implements PipeTransform {
  // PIPE usado para formatar os valores no app.component.html
  // Não esquecer de adicionar ele no declarations do módulo
  transform(value: any, literals: any): any {
    console.log(value);
    if (value === 'M') {
      return literals['male'];
    }

    if (value === 'F') {
      return literals['female'];
    }

    return literals['other'];
  }

}
