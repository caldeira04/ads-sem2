import { Cliente } from './Clientes';
import { Reserva } from './Reservas';
import { Quadra } from './Quadras';
import prompt from 'prompt-sync';
import * as fs from 'fs';

interface Dados {
  clientes: Cliente[];
  quadras: Quadra[];
  reservas: Reserva[];
}

function lerArquivo(): Dados {
  try {
    const data = fs.readFileSync('data.json', 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return { clientes: [], quadras: [], reservas: [] }; // Retorna um objeto vazio padrão se o arquivo não existir ou falhar.
  }
}

const dados = lerArquivo();

const teclado = prompt();
console.log("Bem-vindo ao Gripo");

while (true) {
  console.log("\nEscolha uma opção: ");
  console.log("1. Adicionar quadra");
  console.log("2. Remover quadra");
  console.log("3. Mostrar quadra");
  console.log("4. Adicionar cliente");
  console.log("5. Remover cliente");
  console.log("6. Mostrar clientes");
  console.log("7. Realizar reserva");
  console.log("8. Cancelar reserva");
  console.log("9. Mostrar reservas");

  const opcao = +teclado("Escolha uma opção: ");
  if (opcao === 0) {
    console.log("Dados salvos com sucesso!")
    break;
  }
  switch (opcao) {
    case 1:
      adicionarQuadra();
      break;
    case 2:
      removerQuadra();
      break;
    case 3:
      mostrarQuadra();
      break;
    case 4:
      criarCliente();
      break;
    case 5:
      removerCliente();
      break;
    case 6:
      mostrarClientes();
      break;
    case 7:
      adicionarReserva();
      break;
    case 8:
      removerReserva();
      break;
    case 9:
      mostrarReservas();
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
}

function novoCliente(): Cliente {
  const cliente = new Cliente();
  cliente.id = +teclado('Insira o CPF do cliente: ');
  cliente.nome = teclado('Insira o nome do cliente: ');
  cliente.telefone = +teclado('Insira o telefone do cliente: ');
  salvarArquivo(dados);
  return cliente;
}

function novaQuadra(): Quadra {
  const quadra = new Quadra();
  quadra.esporte = teclado('Esporte realizado na quadra: ');
  quadra.numero = +teclado('Numeração da quadra: ');
  salvarArquivo(dados);
  return quadra;
}

function novaReserva(): Reserva {
  const reserva = new Reserva();
  mostrarClientes();
  reserva.cliente = dados.clientes[+teclado('Escolha o número de ID do cliente: ') - 1].nome;
  reserva.mes = +teclado('Mês da reserva: ');
  reserva.dia = +teclado('Dia da reserva: ');
  reserva.horario = +teclado('Horário da reserva: ');
  mostrarQuadra();
  reserva.quadra = dados.quadras[+teclado('Escolha o número da quadra: ') - 1].numero;
  salvarArquivo(dados);
  return reserva;
}

function adicionarQuadra(): void {
  const quadra = novaQuadra();
  dados.quadras.push(quadra);
  salvarArquivo(dados);
}

function removerQuadra(): void {
  if (dados.quadras.length === 0) {
    console.log('Nenhuma quadra para remover.');
    return;
  }
  console.log("\nQuadras existentes: \n");
  dados.quadras.forEach((quadra: Quadra, index: number) => {
    console.log(`${index + 1}. Esporte: ${quadra.esporte}, Número: ${quadra.numero}`);
  });
  const quadraIndex = +teclado('Escolha o número da quadra para remover: ') - 1;
  if (quadraIndex >= 0 && quadraIndex < dados.quadras.length) {
    dados.quadras.splice(quadraIndex, 1);
    salvarArquivo(dados);
    console.log('Quadra removida com sucesso!');
  } else {
    console.log('Número de quadra inválido.');
  }
}

function mostrarQuadra() {
  if (dados.quadras.length === 0) {
    console.log('Nenhuma quadra cadastrada.');
  } else {
    console.log('\nLista de quadras:');
    dados.quadras.forEach((quadra: Quadra, index: number) => {
      console.log(`${index + 1}. Esporte: ${quadra.esporte}, Número: ${quadra.numero}`);
    });
  }
}

function criarCliente(): void {
  const cliente = novoCliente();
  dados.clientes.push(cliente);
  salvarArquivo(dados);
}

function removerCliente(): void {
  if (dados.clientes.length === 0) {
    console.log('Nenhum cliente para remover.');
    return;
  }
  console.log("\nClientes existentes: \n");
  dados.clientes.forEach((cliente: Cliente, index: number) => {
    console.log(`${index + 1}. Nome: ${cliente.nome}, CPF: ${cliente.id}, Telefone: ${cliente.telefone}`);
  });
  const clienteIndex = +teclado('Escolha o número do cliente para remover: ') - 1;
  if (clienteIndex >= 0 && clienteIndex < dados.clientes.length) {
    dados.clientes.splice(clienteIndex, 1);
    salvarArquivo(dados);
    console.log('Cliente removido com sucesso!');
  } else {
    console.log('Número de cliente inválido.');
  }
}

function mostrarClientes(): void {
  if (dados.clientes.length === 0) {
    console.log('Nenhum cliente cadastrado.');
  } else {
    console.log('\nLista de clientes:');
    dados.clientes.forEach((cliente: Cliente, index: number) => {
      console.log(`${index + 1}. Nome: ${cliente.nome}, CPF: ${cliente.id}, Telefone: ${cliente.telefone}`);
    });
  }
}

function adicionarReserva(): void {
  if (dados.clientes.length === 0) {
    console.log('Nâo foi possível realizar a reserva: Nenhum cliente cadastrado.');
    return;
  }
  if (dados.quadras.length === 0) {
    console.log('Nâo foi possível realizar a reserva: Nenhuma quadra cadastrada.');
    return;
  }
  const reserva = novaReserva();
  // Verificação de conflito de horário
  const conflito = dados.reservas.some((reservaExistente: Reserva) =>
    reservaExistente.quadra === reserva.quadra && reservaExistente.horario === reserva.horario
  );

  if (conflito) {
    console.log('Não é possível realizar a reserva. Já existe uma reserva para essa quadra e horário.');
    return;
  }
  dados.reservas.push(reserva);
  salvarArquivo(dados);
  console.log('Reserva realizada com sucesso!');
}


function removerReserva(): void {
  if (dados.reservas.length === 0) {
    console.log('Nenhuma reserva para cancelar.');
    return;
  }
  console.log("\nReservas existentes: \n");
  dados.reservas.forEach((reserva: Reserva, index: number) => {
    console.log(`${index + 1}. Cliente: ${reserva.cliente}, Data: ${reserva.dia}/${reserva.mes}, Horário: ${reserva.horario}, Quadra: ${reserva.quadra}, ${reserva.esporte}`);
  });
  const reservaIndex = +teclado('Escolha o número da reserva para cancelar: ') - 1;
  if (reservaIndex >= 0 && reservaIndex < dados.reservas.length) {
    dados.reservas.splice(reservaIndex, 1);
    salvarArquivo(dados);
    console.log('Reserva cancelada com sucesso!');
  } else {
    console.log('Número de reserva inválido.');
  }
}



function mostrarReservas(): void {
  if (dados.reservas.length === 0) {
    console.log('Nenhuma reserva cadastrada.');
  } else {
    console.log('\nLista de reservas:');
    dados.reservas.forEach((reserva: Reserva, index: number) => {
      console.log(`${index + 1}. Cliente: ${reserva.cliente}, Data: ${reserva.dia}/${reserva.mes}, Horário: ${reserva.horario}, Quadra: ${reserva.quadra}`);
    });
  }
}

function salvarArquivo(dados: Dados): void {
  fs.writeFile('data.json', JSON.stringify(dados, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
      return;
    }
  });
}
