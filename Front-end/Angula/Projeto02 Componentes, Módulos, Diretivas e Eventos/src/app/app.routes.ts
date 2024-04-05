import { Routes } from '@angular/router';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';
import { Componente03Component } from './componente03/componente03.component';
import { Componente04Component } from './componente04/componente04.component';
//Importaçao do componente
export const routes: Routes = [
    // incluindo o valor 
    {path:'Componente01Component', component:Componente01Component},
    {path:'Componente02Component', component:Componente02Component},
    {path:'Componente03Component', component:Componente03Component},
    {path: '', redirectTo:'/Componente01Component', pathMatch:'full'},
    {path: '**', component:Componente04Component}

];
