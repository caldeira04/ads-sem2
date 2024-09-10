import { useEffect, useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, reset, setFocus } = useForm()
  const [resposta, setResposta] = useState("")
  const [calculo, setCalculo] = useState("")
  const [parcelamento, setParcelamento] = useState("")

  function mostrarMensagem(data) {
    setResposta(`Simulado de seguro: ${data.marca} ${data.modelo}`)
    let valor;
    if (data.condutor == "homem") {
      valor = data.preco * 0.03;
    } else {
      valor = data.preco * 0.02;
    }
    if (data.renovacao == true) {
      valor -= valor * 0.1
    }
    setCalculo(`Valor total para 2 anos: R$ ${valor.toLocaleString("pt-br", { minimumFractionDigits: 2 })}`)
    const valorParcelado = valor / 24
    setParcelamento(`ou em 24 parcelas de: R$ ${valorParcelado.toLocaleString(("pt-br", { minimumFractionDigits: 2 }))}`)
  }

  function handleReset() {

    setFocus("modelo")
    reset({
      marca: "",
      modelo: "",
      preco: "",
      condutor: "",
      renovacao: "",
    })
    setResposta("")
    setCalculo("")
    setParcelamento("")
  }

  useEffect(() => {
    setFocus("modelo")
  }, [])

  return (
    <>
      <header>
        <img src="./assets/react.svg" alt="Logo" />
        <h1>Avenida Seguros</h1>
        <hr />
        <h2>Simulação de seguro de veículos</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit(mostrarMensagem)} onReset={handleReset}>
          <label htmlFor="modelo" className='titulo'>Modelo do Veículo:</label>
          <input type="text" name="modelo" id="modelo" placeholder='Modelo'
            {...register("modelo", { required: true })}
          />
          <br />
          <label htmlFor="Marca" className='titulo'>Marca:</label>
          <select id='marcas' name='marcas'
            {...register("marca")}
          >
            <option value="Chevrolet">Chevrolet</option>
            <option value="Fiat">Fiat</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="BYD">BYD</option>
          </select>
          <br />
          <label htmlFor="preco" className='titulo'>Preço R$</label>
          <input type="number" name="preco" id="preco"
            {...register("preco", { required: true })}
          />
          <br />
          <label htmlFor="condutor" className='titulo'>Principal Condutor:</label>
          <br />
          <input type="radio" name="homem" id="homem" value="homem"
            {...register("condutor")}
          />

          <label htmlFor="homem">Homem</label>
          <input type="radio" name="mulher" id="mulher" value="mulher"
            {...register("condutor")}
          />
          <label htmlFor="mulher">Mulher</label>
          <br />
          <label htmlFor="renovacao" className='titulo'>Cliente Avenida:</label>
          <br />
          <input type="checkbox" name="renovacao" id="renovacao"
            {...register("renovacao")} />
          <label htmlFor="renovacao">É renovação?</label>
          <br />
          <input type="submit" value="Simular Seguro" className='button' />
          <input type="reset" value="Limpar Dados" className='button' />
        </form>
        <p>{resposta}</p>
        <p>{calculo}</p>
        <p>{parcelamento}</p>
      </main>
    </>
  )
}

export default App
