interface Service {
  externa: boolean,
  nome: string,
  desc: string,
  produtos: string,
}

const services: Service[] = [
  {
    externa: true,
    nome: "Lavagem",
    desc: "Lavagem simples com água e sabão neutro",
    produtos: "V-Floc, Cera Blend Líquida, APC Gávea, Revitalizador de plásticos Prolitec, Darker"
  },
  {
    externa: true,
    nome: "Lavagem detalhada (inclui lavagem simples)",
    desc: "Lavagem detalhada com pré-lavagem usando sabão ácido, cera em pasta e lavagem de motor",
    produtos: "V-Mol, Cera Blend em Pasta, Delet, Revitalizador de plásticos em carnaúba Prolitec, Shiny"
  },
  {
    externa: true,
    nome: "Polimento comercial (inclui lavagem detalhada)",
    desc: "Polimento de uma etapa para exposição de brilho",
    produtos: "Boina de espuma Lincoln, HSF, Cera Soft99, Glaco compound + cristalizador de vidros"
  },
  {
    externa: true,
    nome: "Vitrificação",
    desc: "Polimento técnico em 3 etapas, aplicação de vitrificador com 3 anos de proteção",
    produtos: "Boina de lã (corte) e espuma (refino e lustro), HPF, HFF, HSF, Vitrificador CARPRO 3 anos"
  }
]

export default function ItemServices() {
  return (
    <>
      <section>

        <p>asogiasdgoas fodase porr4AA</p>
      </section>

    </>
  )
}
