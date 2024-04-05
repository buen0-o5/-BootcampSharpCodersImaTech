import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../../servicos/postagem.service';
import { Postagens } from '../../modelos/Postagens';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent implements OnInit {
  //Construtor
  constructor(private servicoPostagem:PostagemService){}

  //Vetor de postagens
  postagens:Postagens[] = [];

  //Ao iniciar (O componente e criado)
  ngOnInit(){
    this.listarPostagens();
  }

  //Funçao para listar as postagens
  listarPostagens():void{
    this.servicoPostagem.listarPostagens()
    .subscribe(retorno =>{
      //console.table(retorno); 
      this.postagens = retorno;
    })
  }
}
