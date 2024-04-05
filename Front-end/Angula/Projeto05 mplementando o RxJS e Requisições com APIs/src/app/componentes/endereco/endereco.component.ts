import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from '../../servicos/endereco.service';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent {
    
  //Variavel CEP
  cep:string = '';

    //Construtor
    constructor(private service: EnderecoService){}
  //Funçao para obter o endereço
  obterEndereco():void{
    this.service.retornarEndereco(this.cep)
    .subscribe(retorno =>{console.log(retorno)});
  };
}
