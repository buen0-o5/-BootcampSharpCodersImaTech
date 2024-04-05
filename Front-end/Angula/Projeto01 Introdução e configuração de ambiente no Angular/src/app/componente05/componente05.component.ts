import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente05',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {
 
  formulario = new FormGroup({
      email : new FormControl(''),
      senha : new FormControl('')
  });

  //funçao de envio
  enviar():void{
   alert('ok!');
  }
}
