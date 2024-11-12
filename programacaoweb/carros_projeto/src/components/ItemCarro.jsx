
export default function ItemCarro({ carro, carros, setCarros }) {

  function comentaCarro() {

    const carros2 = [...carros]
    const ind = carros2.findIndex(x => x.modelo == carro.modelo)

    setCarros(carros2)
    localStorage.setItem("carros", JSON.stringify(carros2))
    return 0
  }


  return (
    <div>
      <img src={carro.foto} alt={`Foto do ${carro.marca} ${carro.modelo}, ano ${carro.ano}`} />
      <h2>{carro.marca} {carro.modelo}</h2>
      <h3>{carro.ano}</h3>
      <h3>Câmbio {carro.cambio}</h3>
      <p>{carro.descricao}</p>
    </div>
  )
}
