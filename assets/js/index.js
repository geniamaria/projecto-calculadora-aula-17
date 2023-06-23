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

let conteudo = "";
let numero1;
let numero2;

let operacao;

let tela = document.getElementById("tela");

function numeroPressionado(numero) {
    //inserir a tag H1 dentro da tela
    conteudo = conteudo + numero;
    tela.innerHTML = conteudo;

    //estilizar a tag H1 e a tela
    tela.style.padding = "0";
}

function operacaoPressionada(sinal) {
    
    switch (sinal) {
        case 'c':
            tela.innerHTML = "";
            break;
        case '+':
                numero1 = Number(conteudo);
                conteudo = "";
                tela.innerHTML = "";
                operacao = "+";
            break;
        case '-':
            numero1 = Number(conteudo);
            conteudo = "";
            tela.innerHTML = "";
            operacao = "-";
            break;
         case '×':
                numero1 = Number(conteudo);
                conteudo = "";
                tela.innerHTML = "";
                operacao = "×";
                break;
        case '÷':
                    numero1 = Number(conteudo);
                    if(numero1 == 0){
                        alert("invalid number");
                    }else{
                        conteudo = "";
                    tela.innerHTML = "";
                    operacao = "÷";
                    }
                    
                    break;
        default:
            break;
    }
}

function resultado() {
    switch (operacao) {
        case "+":
            numero2 = Number(tela.innerHTML);
            tela.innerHTML = add(numero1, numero2);
            break;
        case "-":
            numero2 = Number(tela.innerHTML);
            tela.innerHTML = subtract(numero1, numero2);
            break;
        case "×":
            numero2 = Number(tela.innerHTML);
            tela.innerHTML = multiply(numero1, numero2);
            break;
            case "÷":
            numero2 = Number(tela.innerHTML);
            tela.innerHTML = divide(numero1, numero2);
            break;
        default:
            break;
    }
}



