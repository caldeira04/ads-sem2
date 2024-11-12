import { useForm } from "react-hook-form";
import './NovoCarro.css'

export default function NovoCarro({ carros, setCarros }) {
  const { register, handleSubmit } = useForm()

  function addCarro(data) {
    const carroNovo = {
      modelo: data.modelo,
      marca: data.marca,
      ano: data.ano,
      cambio: data.cambio,
      descricao: data.descricao,
      foto: data.foto,
      comentario: ""
    }

    const carros2 = [carroNovo, ...carros]
    setCarros(carros2)
    localStorage.setItem("carros", JSON.stringify(carros2))
  }

  return (
    <>
      <h2>Adicione seu carro à lista</h2>
      <form onSubmit={handleSubmit(addCarro)}>
        <p className="input__item">
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            {...register("marca")}
            required
          />
        </p>

        <p className="input__item">
          <label htmlFor="modelo">modelo:</label>
          <input
            type="text"
            id="modelo"
            {...register("modelo")}
            required
          />
        </p>
        <p className="input__item">
          <label htmlFor="ano">Ano:</label>
          <input
            type="number"
            id="ano"
            {...register("ano")}
            required
          />
        </p>
        <p className="input__item">
          Tipo de Câmbio:
          <input
            type="radio"
            id="auto"
            value="Automático"
            {...register("cambio")}
          />
          <label htmlFor="auto">Automático</label>
          <input
            type="radio"
            id="manual"
            value="Manual"
            {...register("cambio")}
          />
          <label htmlFor="manual">Manual</label>

          <input
            type="radio"
            id="CVT"
            value="CVT"
            {...register("cambio")}
          />
          <label htmlFor="CVT">CVT</label>
        </p>
        <p className="input__item">
          <label htmlFor="descricao">Insira a descrição:</label>
          <input
            type="text"
            id="descricao"
            {...register("descricao")}
          />
        </p>
        <p className="input__item">
          <label htmlFor="foto">Adicione uma imagem do carro:</label>
          <input
            type="url"
            id="foto"
            {...register("foto")}
            required
          />
        </p>
        <p className="input__item">
          <input type="submit" value="Adicionar carro" />
          <input type="reset" value="Limpar formulário" />
        </p>

      </form>

    </>
  )


}
