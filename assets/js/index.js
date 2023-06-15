let opcaoEscolhida;
let nr1, nr2;


let add = function (nr1, nr2) {
    let soma = nr1 + nr2;

    return soma;
}
let subtract = function (nr1, nr2) {
    let subtract = nr1 - nr2;

    return subtract;
}
let multiply = function (nr1, nr2) {
    let multiply = nr1 * nr2;

    return multiply;
}
let divide = function (nr1, nr2) {
    let divide  = nr1 / nr2;

    return divide ;
}


while (true) {
    opcao = prompt(`
    
    Escolha a opcao: 
    1. Adicionar 
    2. subtract 
    3. multiply
    4. divide 
    5. Sair
    `);

    //converter a opcao para number
    opcaoEscolhida = Number(opcao);

    if (opcaoEscolhida == 5) {
        break;
    }
    switch (opcaoEscolhida) {
        case 1:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));

            console.log(add(nr1, nr2));
            break;
        case 2:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));
            console.log( subtract(nr1, nr2));
            break;
        case 3:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));
            console.log(multiply(nr1, nr2));

            break;
        case 4:
            nr1 = Number(prompt("escreva o numero"));
            nr2 = Number(prompt("escreva o numero"));
            console.log(divide (nr1, nr2));
            break;
        default:
            console.log("opcao invalida.");
            break;

    }
}




