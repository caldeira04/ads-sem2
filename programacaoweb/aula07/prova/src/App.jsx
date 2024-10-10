import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, reset, setFocus } = useForm()
  const [resposta, setResposta] = useState('')

  function handleReset() {
    setFocus('name')
    reset({
      name: '',
      hasDivida: '',
      salario: '',
      isCliente: 'less5',
      casa: false,
      carro: false,
    })
    setResposta('')
  }

  function mostrarEmprestimo(data) {
    console.log(data)
    if (data.hasDivida === 'nao' && data.casa === true && data.carro === true && data.isCliente === 'more10') {
      setResposta(
        <div className='resposta'>
        <img src='ok.jpg' alt='Passou' width='300px' />
        <span>
          Parabéns {data.name}! <br />
          Empréstimo pré-aprovado no valor de R$ {data.salario * 6} <br />
          Solicite no App do Banco
        </span>
        </div>
      )
      } else if (data.hasDivida === 'sim' && data.casa === false && data.carro === false && data.isCliente === 'less5') {
      setResposta(
        <div className="resposta negativa">
          <img src="nook.webp" alt="Não passou" width="300px" />
          <span>
            Sinto muito, {data.name}! <br />
            Empréstimo não aprovado. <br />
            Converse com seu gerente
          </span>
        </div>
      )
    } else {
      setResposta(
        <div className='resposta'>
        <img src='ok.jpg' alt='Passou' width='300px' />
      <span>
        Parabéns {data.name}! <br />
        Empréstimo pré-aprovado no valor de R$ {data.salario * 3} <br />
        Solicite no App do Banco
      </span>
      </div>
      )
    }
  }


  return (
    <>
      <header>
        <img src="./emprestimo.jpg" alt="Empréstimo" width="300px" />
        <div>
          <h1>Banco Avenida</h1>
          <h2>App: Controle de Empréstimos</h2>
        </div>
      </header>
      <form onSubmit={handleSubmit(mostrarEmprestimo)} onReset={handleReset}>
        <label htmlFor="name">Nome:<br/></label>
        <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            {...register('name', {required: true})}
          />
          <br />
        <label htmlFor="hasDivida">Possui divida ativa?<br/></label>
        <input 
        type="radio" 
        name="sim" 
        id="sim" 
        value="sim"
        {...register('hasDivida')}
        />
          Sim
        <input 
        type="radio" 
        name="nao" 
        id="nao" 
        value="nao"
        {...register('hasDivida')}
        />
          Não
          <br />
        <label htmlFor="salario">Salário:<br/></label>
        <input
            type="number"
            name="salario"
            id="salario"
            placeholder="Salário"
            {...register('salario', {required: true})}
          />
          <br />
        <label htmlFor="isCliente"> É cliente?<br/></label>
        <select 
        name="isCliente" 
        id="isCliente"
        {...register('isCliente')}
        >
            <option value="less5">Menos de cinco anos</option>
            <option value="between5and10">Entre cinco e dez anos</option>
            <option value="more10">Mais dez anos</option>
          </select>
          <br />
        <label htmlFor="hasBens">Bens em seu nome:<br/></label>
        <input 
        type="checkbox" 
        name="casa" 
        id="casa" 
        {...register('casa')}
        />
        Casa/Apto
        <input 
        type="checkbox" 
        name="carro" 
        id="carro" 
        {...register('carro')}
        />
        Carro
        <br />
        <input className='button' type="submit" value="Simular Empréstimo" />
        <input className='button reset' type="reset" value="Limpar Dados" />
      </form>
      <p>{resposta}</p>
    </>
  )
}

export default App
