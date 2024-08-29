import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while (true) {
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if (opcao === 0) {
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;

        case 2:
            frear(carro);
            break;

        case 3:
            subirMarcha(carro);
            break;

        case 4:
            descerMarcha(carro);
            break;

        case 5:
            imprimir(carro);
            break;

        default:
            break;
    }
}


function acelerar(veiculo: Veiculo): void {
    if (veiculo.marchaAtual != 0) {
        if (veiculo.velocidade <= veiculo.velocidadeCompativel) {
            veiculo.velocidade += veiculo.potencia * 0.1;
            console.log(veiculo.velocidade);

        } else {
            console.log("Cortando de giro! Suba a marcha!")
            veiculo.velocidade = veiculo.velocidadeCompativel;
        }
    }
}

function frear(veiculo: Veiculo): void {
    if (veiculo.velocidade > 0) {
        veiculo.velocidade -= 10;
        if (veiculo.velocidade < 0) {
            veiculo.velocidade = 0;
        }
        console.log(veiculo.velocidade);
    }
}

function subirMarcha(veiculo: Veiculo): void {
    if (veiculo.marchaAtual < veiculo.numeroMarchas) {
        veiculo.marchaAtual += 1;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`)
    }
}

function descerMarcha(veiculo: Veiculo): void {
    if (veiculo.marchaAtual > 0) {
        veiculo.marchaAtual -= 1;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`)
    }
}

function imprimir(veiculo: Veiculo): void {
    console.table(veiculo);
}

function criaVeiculo(): Veiculo {
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    veiculo.marchaAtual = +0;
    veiculo.velocidadeMaxima = + veiculo.velocidadeMaxima + (veiculo.potencia / 2);
    veiculo.velocidadeMaximaMarcha = + veiculo.velocidadeMaxima / veiculo.numeroMarchas;
    veiculo.velocidadeCompativel =+ veiculo.velocidadeMaximaMarcha * veiculo.marchaAtual;
    return veiculo;
}
