import { Pessoa } from "./Pessoa";
export class Cliente extends Pessoa {
  private lastAccess: Date = new Date();
}
