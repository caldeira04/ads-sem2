import Titulo from "./components/Titulo";
import ItemCarro from "./components/ItemCarro";
import './App.css';
import { useState, useEffect } from "react";

export default function Explorar() {
  const [carros, setCarros] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    if (localStorage.getItem("carros")) {
      const carros2 = JSON.parse(localStorage.getItem("carros"))
      setCarros(carros2)
    }
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const carrosFiltrados = carros.filter(carro =>
    Object.values(carro).some(value =>
      String(value).toLowerCase().includes(filter.toLowerCase())
    )
  )



  return (
    <>
      <Titulo />
      <h2>Essa é a página de explorar</h2>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Digite o que deseja filtrar"
      />
      <div className='container__lista__carros'>
        {carrosFiltrados.map((carro, index) => (
          <ItemCarro key={index} carro={carro} carros={carros} setCarros={setCarros} />
        ))}
      </div>
    </>
  )
}
