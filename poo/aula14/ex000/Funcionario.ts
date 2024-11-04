import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
  admissionDate: Date = new Date()
  lastAccess: Date = new Date()
  isActive: boolean = true;
}
