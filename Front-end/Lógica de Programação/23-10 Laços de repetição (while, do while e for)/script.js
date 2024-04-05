
function parImpar(){
  let valida = false;
  let numero = parseInt(prompt('Digite um numero'));
  let par = 0;
  let impar = 0;


  if(numero <= 0){
    alert('Favor informar um número maior ou igual que zero.');
  }else{
    valida = true;

    for(let i=1; i <=numero; i++){
      if(i % 2 === 0){
        par++
      }else{;
        impar++;
      }
    }
    alert(`Pares: ${par} \n Ímpares: ${impar}`)
  }
}
//parImpar()

//laço de repetiçao:
//Exemplo 1
//For:
// for(let i =0; i <=10; i++){
//   document.write(i + '\n');
// }

//------------------------------------------------------------------------------
//Exemplo 1
//Do While:
// let i = 10;
// do{
//   document.write(i + '\n');
//   i--;
// }while(i >=0);
//Divisor
//------------------------------------------------------------------------------
//Exemplo 1
//While:
// while(i >= 0){
//   document.write(i + '\n');
//   i--;
// }

//Exemplo 2
// let i = 0;

// // Laço
// while(i <= 10){
//     document.write(i + "\n");
//     i++;
// }
//------------------------------------------------------------------------------
//Operador ternario
//Exemplo 1
// let resto = 100 % 2;
// document.write(resto == 0 ? 'par' : 'impar');

//Exemplo 2
// let ano = 2024 % 4;
// document.write(ano == 0 ? 'Bissexto' : 'Não é bissexto');