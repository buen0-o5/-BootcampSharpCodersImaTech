import { Component } from '@angular/core';
import { Aluno } from '../../Modelo/Aluno';
import { FormularioComponent } from '../formulario/formulario.component';
import { TabelaComponent } from '../tabela/tabela.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormularioComponent, TabelaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
//Vetor de alunos
  vetor : Aluno[] = [
    {nome:'Pitty',nota1:8,nota2:10},
    {nome:'Scooby',nota1:10,nota2:10},
    {nome:'Bolinho de Noiva',nota1:7,nota2:10}
  ];

  //Funçao de cadastro
  cadastrarAluno(obj:Aluno):void{
    this.vetor.push(obj);
  }
}
