interface Carro {
  marca: string;
  modelo: string;
  placa: string;
  cor: string;
}
interface Cliente {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  carro: Carro[];
}

const clientes: Cliente[] = [
  {
    nome: "Guilherme Coelho",
    telefone: "53999999991",
    email: "guilhermecoelho@gmail.com",
    endereco: "Rua dos Bobos, 0",
    carro: [
      {
        marca: "Volkswagen",
        modelo: "GOLF GTI",
        placa: "ABC1B91",
        cor: "Cinza"
      },
      {
        marca: "Porsche",
        modelo: "911",
        placa: "BYE9B11",
        cor: "Amarelo"
      }
    ]
  },
  {
    nome: "Augusto Cesar",
    telefone: "53999999992",
    email: "augustinho@gmail.com",
    endereco: "Rua dos Bobos, 1",
    carro: [
      {
        marca: "Mercedes",
        modelo: "W124",
        placa: "CEI4B30",
        cor: "Azul"
      }
    ]
  }
]


export default function ItemClientes() {
  return (
    <div>
      <h1>Clientes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {clientes.map(cliente => (
          <div key={cliente.nome} className="bg-blue-950 text-white my-6 lg:my-8 py-2 px-4">
            <h2 className="uppercase text-xl text-center font-bold">{cliente.nome}</h2>
            <div className="my-4">
              <p>Telefone: {cliente.telefone}</p>
              <p>Email: {cliente.email}</p>
              <p>Endereço: {cliente.endereco}</p>
              <p>Carros:</p>
              <ul>
                {cliente.carro.map(carro => (
                  <li key={carro.placa}>{carro.marca} {carro.modelo} ({carro.placa}) - Cor: {carro.cor}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
