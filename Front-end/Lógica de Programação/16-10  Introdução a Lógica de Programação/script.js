function Menu(){
    var inpu1 = parseInt(prompt('Digite a opção que deseja prosseguir: \n[1]Calcular media \n[2]Apresenta-se'))

    if(inpu1 === 1){
       calcularMedia();
    } else if(inpu1 === 2){
        Apresentacao();
    }else{
        alert('Opção invalida!')
    }
}

function calcularMedia() {
    // Solicita os valores ao usuário usando o alert e converte para números
    var input1 = parseFloat(prompt('Digite o primeiro número:'));
    var input2 = parseFloat(prompt('Digite o segundo número:'));

    // Verifica se os valores são números válidos
    if (isNaN(input1) || isNaN(input2)) {
        alert('Por favor, digite números válidos.');
        return;
    }

    // Calcula a média
    var media = (input1 + input2) / 2;
    // Condicional - Aninhada
    if(media >=7){
        alert(`Aprovado(a) ! \nA média é: ${media}`);
    }else if(media >=5){
        alert(`Em exame! \nA média é: ${media} `);
    }else{
        alert(`Reprovado(a)! \nA média é: ${media} `);
    }
}
function Apresentacao(){
    var input1 = prompt('Digite o seu nome');
    var input2 = parseInt(prompt('Digite sua idade'));
    var input3 = prompt('Digite o nome da sua cidade');


    alert(`Boa noite ${input1}, você tem ${input2} anos e mora em ${input3}`)
}

Menu();


