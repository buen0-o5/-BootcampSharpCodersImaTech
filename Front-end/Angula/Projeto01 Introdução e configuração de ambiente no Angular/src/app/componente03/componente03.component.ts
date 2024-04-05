import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
    //Variavel media
    media:number = 8;

    //Variavel de linguagem
    linguagem:string = 'CSS';

    //Vetor de nomes
    nome:string[] = ['Pitty','Scooby'];
}
