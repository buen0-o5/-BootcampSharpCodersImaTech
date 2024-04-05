import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../../Modelo/Aluno';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  //Funçao para executar o cadatro
  cadastrar():void{
    this.cadastrarAluno.emit(this.formulario.value as Aluno);

  }
  
  //Obter a funçao cadastrarAluno que esra no componente princiapal
  @Output() cadastrarAluno = new EventEmitter<Aluno>();
  


  //Formulario
  formulario = new FormGroup({
    nome: new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl(''),
  });
}
