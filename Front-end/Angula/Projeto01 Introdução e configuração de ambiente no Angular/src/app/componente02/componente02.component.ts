import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {
  //Exibir texto
  exibirTexto:boolean = false;

  //Funçao para exibir ou ocutar o texto
  visibilidadeTexto():void{
    this.exibirTexto = !this.exibirTexto;
  }

  nomes:string[] = ['Pitty', 'Scooby','Bolinho de noiva', 'Iris', 'Algodao']

  // Linguagem de Programaçao
  linguagens:string = '';


}
