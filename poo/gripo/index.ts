import { Cliente } from './Clientes'
import { Reserva } from './Reservas'
import { Quadra } from './Quadras'
import prompt from "prompt-sync"
import * as fs from 'fs'

function lerArquivo() {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return { clientes: [], quadras: [], reservas: [] }; // Retorna um objeto vazio padrão se o arquivo não existir ou falhar.
    }
}

function salvarArquivo(dados: any) {
    fs.writeFile('data.json', JSON.stringify(dados, null, 2), 'utf-8', (err) => {
        if (err) {
            console.error('Erro ao salvar o arquivo:', err);
            return;
        }
        console.log('Dados salvos com sucesso!');
    });
}

const teclado = prompt()

console.log("Bem vindo ao Gripo")

while (true) {
	console.log("Escolha uma opção: ")
	console.log("1. Adicionar quadra")
	console.log("2. Remover quadra")
	console.log("3. Adicionar cliente")
	console.log("4. Realizar reserva")
	console.log("5. Cancelar reserva")
	const opcao = +teclado("Escolha uma opção: ")
	if (opcao === 0) {
		break;
	}
	switch (opcao) {
		case 1:
			break;
		
		case 2:
			console.log("\nEscolha uma quadra para remover:")
			listaQuadra();
			break;

		case 3:
			criarCliente()
			break;
			
		case 4:
			adicionarReserva()
			break;

		case 5:
			removeReserva()
			break;
			
		default:
			break;
	}

}

function listaQuadra() {
	console.log("Quadras disponíveis: \n")
	const dados = lerArquivo()
	dados.quadras.forEach((quadra: any, index: number) => {
		console.log(`${index + 1}. ${quadra.esporte}, Número: ${quadra.numero}`)
	})

}

function novoCliente(): Cliente {
	const cliente: Cliente = new Cliente();
	cliente.id = +teclado('Insfunction salvarArquivo(dados: any) {
    fs.writeFile('data.json', JSON.stringify(dados, null, 2), 'utf-8', (err) => {
        if (err) {
            console.error('Erro ao salvar o arquivo:', err);
            return;
        }
        console.log('Dados salvos com sucesso!');
    });
}ira o CPF: ');
	cliente.nome = teclado('Insira o nome do cliente: ');
	cliente.telefone = +teclado('Insira o telefone do cliente: ')
	return cliente;
}

function novaQuadra(): Quadra {
	const quadra: Quadra = new Quadra();
	quadra.esporte = teclado('Esporte realizado na quadra: ')
	quadra.numero = +teclado('Numeração da quadra: ')
	quadra.horario = +teclado('Insira os horários disponíveis para essa quadra: ')
	return quadra
}

function novaReserva(): Reserva {
	const reserva: Reserva = new Reserva();
	reserva.cliente = teclado('Nome do cliente da reserva: ')
	reserva.data = +teclado('Dia da reserva: ')
	reserva.horario = +teclado('Horário da reserva: ')
	reserva.quadra = teclado('Quadra escolhida: ')
	return reserva
}
function criarCliente() {
    const cliente = novoCliente();
    const dados = lerArquivo(); // Lê os dados do arquivo antes de adicionar o novo cliente
    dados.clientes.push(cliente); // Adiciona o novo cliente à lista
    salvarArquivo(dados); // Salva os dados atualizados de volta no arquivo
}

function mostrarClientes() {
    const dados = lerArquivo(); // Lê os dados do arquivo
    if (dados.clientes.length === 0) {
        console.log('Nenhum cliente cadastrado.');
    } else {
        console.log('Lista de clientes:');
        dados.clientes.forEach((cliente: any, index: number) => {
            console.log(`${index + 1}. Nome: ${cliente.nome}, CPF: ${cliente.id}, Telefone: ${cliente.telefone}`);
        });
    }
}

function adicionarReserva() {
	const reserva = novaReserva()
}

function removeReserva() {

}

