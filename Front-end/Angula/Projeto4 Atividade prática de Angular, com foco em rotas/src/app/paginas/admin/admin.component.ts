import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  //contrutor
  constructor(private rota:Router){}

  sair():void{
    //Excluir o e-mail do LocalStorange
    localStorage.removeItem('email');

    //Redirecioanmento
    this.rota.navigateByUrl('/login');
  }
}
