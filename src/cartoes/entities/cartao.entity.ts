import { CartaoTipo } from "../cartao-tipo.enum";
import { Rede } from "src/rede/entities/rede.entity";

export class Cartao {
  id: string;
  numero: string;
  nome: string;
  tipo: CartaoTipo;
  rede: Rede;
  dataVencimento: Date;
  cvv: string;
  portador: string;// uuid do portador
}
