import promptSync from "prompt-sync"
const prompt = promptSync({ sigint: true })

export class Contas {
  /*   Criação dos atributos */
  protected _nome: string = ''
  protected _numeroConta: string = ''
  protected _saldoConta: number = 0
  /*   Criação dos métodos */
  public sacar() {
    const request: number = Number(prompt("Insira a quantia que deseja sacar: R$ "))
    if (request > this._saldoConta) {
      console.log(`${this._nome}, seu saldo é insuficiente para esta transação.`)
    } else {
      this._saldoConta -= request
      console.log(`Certo ${this._nome}, R$ ${request} foi sacado. Saldo atual: R$ ${this._saldoConta}`)
    }
  }
}
