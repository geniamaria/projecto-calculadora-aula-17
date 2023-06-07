let opçãoEscolhida;
let nr1, nr2;
let subtrair, multiplicar, dividir, resultado;


while (true) {
    opção = prompt(`
    
    Escolha a opcao: 
    1. Adicionar 
    2. Subtrair 
    3. Multiplicar
    4. dividir
    5. Sair
    `);

    //converter a opcao para number
    opçãoEscolhida = Number(opção);

    if (opçãoEscolhida == 5) {
        break;
    }
    switch (opçãoEscolhida) {
        case 1:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));
           
            console.log(somarNumeros(nr1, nr2));
            break;
        case 2:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));
            resultado = Subtrair(nr1, nr2);
            break;
        case 3:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));
            resultado = Multiplicar(nr1, nr2);

            break;
        case 4:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));
            resultado = dividir(nr1, nr2);
            break;
        default:
            console.log("Opção invalida.");
            break;

    }
}
let somarNumeros = function (nr1, nr2) {
    let soma = nr1 + nr2;
    
    return soma;
    }
function Subtrair(nr1, nr2) {
    subtração = nr1 - nr2;
    return subtração;
}
function Multiplicar(nr1, nr2) {
    multiplicação = nr1 - nr2;
    console.log(multiplicação);
}
function Dividir(nr1, nr2) {
    divisão = nr1 / nr2;
    return divisão;
}




