import { Link } from "react-router-dom";
import './Titulo.css';

export default function Titulo() {
  return (
    <div className="container__header">
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
