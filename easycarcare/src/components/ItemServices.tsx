interface Service {
  externa: boolean,
  code: string,
  nome: string,
  desc: string,
  produtos: string,
}

const services: Service[] = [
  {
    externa: true,
    code: "lavagemSimples",
    nome: "Lavagem",
    desc: "Lavagem simples com água e sabão neutro",
    produtos: "V-Floc, Cera Blend Líquida, APC Gávea, Revitalizador de plásticos Prolitec, Darker"
  },
  {
    externa: true,
    code: "lavagemDetalhada",
    nome: "Lavagem detalhada (inclui lavagem simples)",
    desc: "Lavagem detalhada com pré-lavagem usando sabão ácido, cera em pasta e lavagem de motor",
    produtos: "V-Mol, Cera Blend em Pasta, Delet, Revitalizador de plásticos em carnaúba Prolitec, Shiny"
  },
  {
    externa: true,
    code: "polimentoComercial",
    nome: "Polimento comercial (inclui lavagem detalhada)",
    desc: "Polimento de uma etapa para exposição de brilho",
    produtos: "Boina de espuma Lincoln, HSF, Cera Soft99, Glaco compound + cristalizador de vidros"
  },
  {
    externa: true,
    code: "polimentoTecnico",
    nome: "Vitrificação",
    desc: "Polimento técnico em 3 etapas, aplicação de vitrificador com 3 anos de proteção",
    produtos: "Boina de lã (corte) e espuma (refino e lustro), HPF, HFF, HSF, Vitrificador CARPRO 3 anos"
  },
  {
    externa: false,
    code: "limpezaSimples",
    nome: "Limpeza simples",
    desc: "Limpeza interna com aspiração e limpeza de painel",
    produtos: "APC Gávea, silicone tutti-fruti gávea, limpa vidros Gávea"
  },
  {
    externa: false,
    code: "limpezaDetalhada",
    nome: "Limpeza detalhada (inclui limpeza simples)",
    desc: "Limpeza profunda de toda parte interna",
    produtos: "Sintra PRO, Intense Vonixx, limpa-vidros Lincoln"
  },
  {
    externa: false,
    code: "higienizacaoBancos",
    nome: "Higienização de bancos (inclui limpeza detalhada)",
    desc: "Aspiração dos carpetes, higienização completa dos bancos com máquina a vapor e extratora",
    produtos: "MultiOxi Prolitec"
  },
  {
    externa: false,
    code: "higienizacaoCompleta",
    nome: "Higienização completa (inclui higienização de bancos)",
    desc: "Higienização completa do carpete, substituição do feltro, limpeza do teto",
    produtos: "Mesmos produtos da higienização de bancos, feltro"
  },
]

export default function ItemServices() {

  const listaServicosExterna = services.filter(servico => servico.externa)
  const listaServicosInterna = services.filter(servico => !servico.externa)

  return (
    <div className="flex flex-col">
      <button className="bg-blue-950 text-white py-2 px-4 rounded-lg m-auto mt-8">Adicionar serviço</button>
      <div className="m-auto my-3 flex flex-row justify-between items-center">
        <div className="flex flex-col w-2/5">
          <h1 className="text-3xl font-bold text-center">Serviços Externos</h1>
          {listaServicosExterna.map(servico => (
            <section className="flex text-sm">
              <div key={servico.nome} className="bg-blue-950 text-white my-6 lg:my-8 pl-4 flex flex-row border-r rounded-r-lg border-l rounded-l-lg">
                <div className="py-4">
                  <h2 className="uppercase text-lg text-center font-bold">{servico.nome}</h2>
                  <p>{servico.desc}</p>
                  <p>Produtos utilizados: {servico.produtos}</p>
                </div>
                <img src={`${servico.code}.png`} width="180px" height="125px" className="border-r rounded-r-lg" />
              </div>
            </section>
          ))}
        </div>
        <div className="flex flex-col w-2/5">
          <h1 className="text-3xl font-bold text-center">Serviços Internos</h1>
          {listaServicosInterna.map(servico => (
            <section className="flex text-sm">
              <div key={servico.nome} className="bg-blue-950 text-white my-6 lg:my-8 pl-4 flex flex-row border-r rounded-r-lg border-l rounded-l-lg">
                <div className="py-4">
                  <h2 className="uppercase text-lg text-center font-bold">{servico.nome}</h2>
                  <p>{servico.desc}</p>
                  <p>Produtos utilizados: {servico.produtos}</p>
                </div>
                <img src={`${servico.code}.png`} width="180px" height="125px" className="border-r rounded-r-lg" />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
