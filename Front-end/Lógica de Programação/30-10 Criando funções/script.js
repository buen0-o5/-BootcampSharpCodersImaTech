//Function para enviar dados
function enviar(formulario) {
  //Capturando valores pelo inputs

  let nome = formulario[0].value;
  let idade = parseInt(formulario[1].value);

  //mensagem
  if (nome == "") {
    alert("Informe um nome");
    formulario[0].focus();
  } else if (isNaN(idade)) {
    alert("Informe uma idade");
    formulario[1].focus();
  } else {
    alert(`Boa noite ${nome}, você tem ${idade} anos.`);
  }
}

function linguagem(elemento) {
  switch (parseInt(elemento)) {
    case 1:
      alert("Linguagem de marcação");
      break;

    case 2:
      alert("Linguagem de estilos");
      break;

    case 3:
      alert("Linguagem de programação");
      break;

    default:
      alert("Escolha uma linguagem");
  }
}
function mensagem(){
  alert("Hello World!");
}