import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from './Pessoa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 //Variavel de texto
 textto:string = "Aprendendo a trabalhar com Jasmine e o Karma";

 //Funçao para retornar a soma
 soma(n1:number, n2:number):number{
  return n1+ n2;
 }

 //Funçao para retornar um objeto do tipo Pessoa
   retornarPessoa(obj:Pessoa):Pessoa{
    return obj;
   }
}
