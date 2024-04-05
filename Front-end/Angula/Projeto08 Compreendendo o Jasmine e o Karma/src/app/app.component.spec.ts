//Inportaçoes
import {TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Pessoa } from './Pessoa';
//Descricao do teste unitario

describe('AppComponent', () =>{
//Inicializaçao
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppComponent]
    }).compileComponents();
  });
    //Validar a variavel texto
    it('Validar variavel de texto', ()=>{
      //Fixture
      const fixture = TestBed.createComponent(AppComponent);

      //Obter as variaveis e funçoes do componente
      const component = fixture.componentInstance;

      //Validaçao
      expect(component.textto).toEqual('Aprendendo a trabalhar com Jasmine e o Karma');
    });

    //Validar a funça soma 
    it('Validar funçao a soma', ()=>{
      const fixture = TestBed.createComponent(AppComponent);

      //Obter as variaveis e funçoes do componente
      const component = fixture.componentInstance;

      //executar a funçao e obter um retorn
      let retorno = component.soma(5,4);

      expect(typeof retorno).toBe('number');
    });


    //Validar o retorno da funçao retornar Pessoa
    it('Funçao retornar pessoa', ()=>{
      const fixture = TestBed.createComponent(AppComponent);

      //Obter as variaveis e funçoes do componente
      const component = fixture.componentInstance;

      //Criar um objeto do tipo pesso
      const obj = new Pessoa('Pitty', 9 );

      //Validar
      expect(obj instanceof Pessoa).toBeTrue;
    });
});