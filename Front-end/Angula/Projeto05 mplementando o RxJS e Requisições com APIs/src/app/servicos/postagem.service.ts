import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Postagens } from '../modelos/Postagens';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  //Construtor
  constructor(private http:HttpClient) { }

  //URLs
  private urlPostagem = 'https://jsonplaceholder.typicode.com/posts';

  //Metodo para retornar todas as postagens
    listarPostagens():Observable<Postagens[]>{
      return this.http.get<Postagens[]>(this.urlPostagem);
    }
  }

  //Observable: exxecuta requisiçoes em peridos de tempo
  //Subscriber: recebe o retorno das requisiçoes



