import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //Construtor
  constructor(private rota:Router){}

  //Formulario
  formulario = new FormGroup({
   // email: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]), //Validadando mais de uam informaçao
    senha: new FormControl('', Validators.required)
  });
  //Funçao para  autentificar
    autentificar():void{
      if(this.formulario.value.email === 'contato@pitty.com'
      &&
      this.formulario.value.senha === '123')
     {
        //Adicionar o e-mail no localStorage
        localStorage.setItem('email', this.formulario.value.email);

        this.rota.navigateByUrl('/admin');
     }else{
      alert('E-mail ou senha incorreta');
     }
    }
}
