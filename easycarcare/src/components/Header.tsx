export default function Header() {
  return (
    <header className="bg-blue-950 flex flex-row text-white justify-between px-8 py-4">
      <div className="flex flex-row gap-6">
        <div className="flex flex-col">
          <h1 className="text-xl text-center">EasyCarCare</h1>
          <h2 className="text-center opacity-75">aesthetic automotive</h2>
        </div>
        <img src="tesla-x.png" alt="Logo inicial do programa" width="50px" height="50px" />
      </div>
      <nav className="flex flex-row items-center gap-10">
        <img src="hamburguer.png" alt="Menu hamburguer" className="lg:hidden" width="40px" height="40px" />
        <ul className="hidden lg:flex flex-row gap-10 text-xl">
          <li className="font-bold">Agenda</li>
          <li>Serviços</li>
          <li>Clientes</li>
          <li>Estoque</li>
        </ul>
        <div className="hidden lg:flex flex-row items-center gap-3">
          <img src="account.png" alt="Ícone da conta" width="40px" height="40px" />
          <p>João Pedro</p>
          <img src="logout.png" alt="Ícone de saída" width="40px" height="40px" />
        </div>
      </nav>
    </header>
  )
}
