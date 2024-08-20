import { useState } from 'react'
import './App.css'
function App() {
  const [foto, setFoto] = useState("vermelha.png")
  const [msg, setMsg] = useState("Sinal vermelho, proibido passar")

  function trocaSinal() {
    if (foto == "vermelha.png") {
      setFoto("verde.png")
      setMsg("Sinal verde, permitido passar")
    } else if (foto == "verde.png") {
      setFoto("amarela.png")
      setMsg("Sinal amarelo, esteja alerta")
    } else {
      setFoto("vermelha.png")
      setMsg("Sinal vermelho, proibido passar")
    }
  }

  return (
    <>
      <h1 className='cor-titulo'>Escola de trânsito!</h1>
      <h2>Aula sobre sinaleiras</h2>
      <hr />
      <img onClick={trocaSinal} src={foto} alt="Sinaleira Vermelha" className='img-sinaleiras' />
      <h2>{msg}</h2>
      <h2><i>Clique sobre o sinal para trocar a cor</i></h2>
    </>
  )
}

export default App
