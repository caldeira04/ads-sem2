import "./App.css"
import { useState } from "react"

function App() {
  const [clientCount, setClientCount] = useState(0)
  const [emptyCount, setEmptyCount] = useState(10)

  function increaseClient() {
    if (emptyCount == 0) {
      alert("Não há mesas disponíveis, por favor, aguarde.")
    } else {
      setClientCount(clientCount + 1)
      setEmptyCount(emptyCount - 1)
    }
  }

  function decreaseClient() {
    if (clientCount == 0) {
      alert("Não há clientes no restaurante.")
    } else {
      setEmptyCount(emptyCount + 1)
      setClientCount(clientCount - 1)
    }
  }

  return (
    <>
      <div className="main">
        <h1>Título</h1>

        <p>Mesas disponíveis no restaurante: {emptyCount}</p>
        <p>Mesas ocupadas no restaurante: {clientCount}</p>

        <button onClick={increaseClient}>Entrada de cliente</button>
        <button onClick={decreaseClient}>Saída de cliente</button>
      </div>
    </>
  )
}

export default App
