import { Link } from "react-router-dom";

export default function Titulo() {
  return (
    <div>
      <header>
        <h1>Carro de Review</h1>
        <nav>
          <p><Link to={'/'}>Início</Link></p>
          <p><Link to={'/explorar'}>Explorar</Link></p>
        </nav>
      </header>
    </div>
  )
}
