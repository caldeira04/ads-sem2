import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, reset, setFocus } = useForm()
  const [resposta, setResposta] = useState("")
  const [calculo, setCalculo] = useState("")

  function calcularRefeicao(data) {

    setResposta(`${data.nome}, você vai comer um prato de ${data.peso}g`)
    const total = (data.peso / 1000) * 72
    setCalculo(`Total a pagar: R$ ${total.toLocaleString("pt-br", { minimumFractionDigits: 2 })}`)
  }

  function limpar() {
    setFocus("nome")
    reset({
      nome: "",
      peso: ""
    })
    setResposta("")
    setCalculo("")
  }

  useEffect(() => {
    setFocus("nome")
  }, [])

  return (
    <>
      <h1>Restaurante Avenida</h1>
      <h2>Cálculo do valor das refeições</h2>
      <form onSubmit={handleSubmit(calcularRefeicao)} onReset={limpar}>
        <p>
          <label htmlFor="nome">Nome do Cliente:</label>
          <input type="text" id="nome" className='campos'
            {...register("nome")}
          />
        </p>
        <p>
          <label htmlFor="peso">Peso do prato (g):</label>
          <input type="number" id="peso" className='campos'
            {...register("peso")}
          />
        </p>
        <input type="submit" value="Calcular" className='btn btn-submit' />
        <input type="reset" value="Limpar" className='btn btn-reset' />
      </form>
      <h2>{resposta}</h2>
      <h2>{calculo}</h2>
    </>
  )
}

export default App
