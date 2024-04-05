function Menu(){
    var inpu1 = parseInt(prompt('Digite a opção que deseja prosseguir: \n[1]Condicional \n[2]Operadores'))

    if(inpu1 === 1){
        condicional() ;
    } else if(inpu1 === 2){
        operadores();
    }else{
        alert('Opção invalida!')
    }
}

function condicional() {
  let input1 = parseInt(prompt("Digite o código do produto"));

  //tipos de condicionais

  //Condicional - Aninhada
  // if(input1 === 1){
  //     alert('Monitor');
  // }else if(input1 === 2){
  //     alert('Teclado');
  // }else if(input1 === 3){
  //     alert('Mouse');
  // }else if(input1 === 4){
  //     alert('Notebook');
  // }else{
  //     alert('Código inválido');
  // }

  // switch case
  switch (input1) {
    case 1:
      alert("Monitor");
      break;
    case 2:
      alert("Teclado");
      break;
    case 3:
      alert("Mouse");
      break;
    case 4:
      alert("Notebook");
      break;
      default:
        alert('Código inválido');
  }
}

function operadores()
{
    let valor = prompt("Informe o valor da compra");
    let tipoPagamento = confirm("Pagamento à vista?");

    //condicional
    if(valor >= 200 || tipoPagamento == true){
        alert(`Total a pagar R$ ${valor*0.9}`);
    }else{
        alert(`Total a pagar R$ ${valor}`);
    }
}


Menu()
