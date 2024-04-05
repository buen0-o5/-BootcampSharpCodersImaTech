import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {
  texto:string ='';
  
  //Inputs
  email:string ='';
  senha:string ='';
}
