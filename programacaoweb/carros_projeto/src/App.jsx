import { useEffect, useState } from 'react'
import './App.css'
import ItemCarro from './components/ItemCarro'
import Titulo from './components/Titulo'
import NovoCarro from './components/NovoCarro'
function App() {
  const [carros, setCarros] = useState([])
  useEffect(() => {
    if (localStorage.getItem("carros")) {
      const carros2 = JSON.parse(localStorage.getItem("carros"))
      setCarros(carros2)
    }
  }, [])

  const listaCarros = carros.map(carro => (
    <ItemCarro key={carro.nome}
      carro={carro}
      carros={carros}
      setCarros={setCarros} />
  ))

  return (
    <>
      <Titulo />
      <p className='font-sans'>Página principal</p>
      <div>
        {listaCarros}
      </div>
      <div>
        <NovoCarro />
      </div>
    </>
  )
}

export default App
