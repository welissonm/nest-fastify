import { CartaoTipo } from "../cartao-tipo.enum";

export class CriarCartaoDto {
  portador: string;// uuid do portador
  nome: string;
  tipo: CartaoTipo;
  rede: string;
}