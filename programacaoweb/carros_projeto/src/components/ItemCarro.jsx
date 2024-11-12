
export default function ItemCarro({ carro, carros, setCarros }) {
  function comentaCarro() {
    const comentario = prompt("Comente sobre o carro")
    if (comentario == "") {
      alert("Erro... você deve indicar um comentário")
      return
    }
    const carros2 = [...carros]
    const ind = carros2.findIndex(x => x.modelo == carro.modelo)
    carros2[ind].comentario = comentario

    setCarros(carros2)
    localStorage.setItem("carros", JSON.stringify(carros2))
  }

  return (
    <div>
      <img widht="250px" height="250px" src={`${carro.foto}`} alt={`Foto do ${carro.marca} ${carro.modelo}, ano ${carro.ano}`} />
      <h2>{carro.marca} {carro.modelo}</h2>
      <h3>{carro.ano}</h3>
      <h3>Câmbio {carro.cambio}</h3>
      <p>{carro.descricao}</p>
      {carro.comentario == "" ?
        <button onClick={comentaCarro}>Comentar</button>
        :
        <p>{carro.comentario}</p>
      }
    </div>
  )
}
