import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [CommonModule], //Atençao
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  //Variavel
  texto:string = "Hello World!";

  //Objeto (any e qualquer coisa, quando nao se tem um tipo especifico)
  pessoa:any = {
    'nome':'Julio',
    'idade': 36
  };
}