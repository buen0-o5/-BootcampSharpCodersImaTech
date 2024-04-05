import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../Modelo/Aluno';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(obj: Aluno): number {
    //Estrair nota
    let nota1:number = obj.nota1 || 0;
    let nota2:number = obj.nota2 || 0;

    //Realizar calculo de medioa
    let media:number = (nota1+nota2)/2;

    return media;
  }

}
