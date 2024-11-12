import { useEffect, useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import './App.css'
import ItemCarro from './components/ItemCarro'
import Titulo from './components/Titulo'
import NovoCarro from './components/NovoCarro'

function App() {
  const [carros, setCarros] = useState([])
  const [open, setOpen] = useState(false)
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

  function adicionarCarro() {
    setOpen(true)
  }

  return (
    <>
      <Titulo />
      <h2>Página principal</h2>
      <button onClick={adicionarCarro} className='button'>Adicionar</button>
      <div className='container__lista__carros'>
        {listaCarros}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoCarro carros={carros} setCarros={setCarros} />
      </Modal>
    </>
  )
}

export default App
