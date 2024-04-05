import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../Modelos/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  //Url
  private url:string = 'http://localhost:3000/alunos';

  //Contrutor
  constructor(private http:HttpClient) { }

  //Metodo para selecionar alunos
    selecionar():Observable<Aluno[]>{
      return this.http.get<Aluno[]>(this.url);
    }

  //Metodo para cadastrar alunos
   cadastrar(obj:Aluno):Observable<Aluno>{
    return this.http.post<Aluno>(this.url, obj);
  }

  //Metodo para remover alunos
  remover(id:Number):Observable<any>
  {
    return this.http.delete<any>(`${this.url}/${id}`);
    //return this.http.delete<any>('${this.url}'+'${id}');

  }
}
