import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlunoService } from '../../servicos/aluno.service';
import { Aluno } from '../../Modelos/Aluno';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
  //Vetor de alunos
  alunos:Aluno[]= []; 

  Formulario = new FormGroup({
    nome:  new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl('')

  });
  
  //Contrutor
    constructor(private servico: AlunoService){

    }

    //Apos redenrizar o componete
    ngOnInit(){
      this.servico.selecionar()
      .subscribe(dados => this.alunos = dados);
    }

    //Metodo para cadastrar alunos
    cadastrar():void{
      this.servico.cadastrar(this.Formulario.value as Aluno)
        //as indica que o modelo formulario e igual ao modelo de aluno 
        
        //Cadastrar no vetor de alunos
        .subscribe(aluno => this.alunos.push(aluno));

        //Limpar o formulario
        this.Formulario.reset();
    }
    remover(id:Number):void{
          this.servico.remover(id)
          .subscribe(r =>{

            //Encontrar a posiçao do aluno no vetor
            let posicaoAluno = this.alunos.findIndex(obj => {return obj.id === id});

            //Remover do vetor
            this.alunos.splice(posicaoAluno, 1);

          })
    }
}
