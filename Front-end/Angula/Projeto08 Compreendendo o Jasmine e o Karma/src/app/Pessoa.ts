export class Pessoa{
    //atributos

    private nome?:string;
    private idade?:number;

    //Construtor
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}