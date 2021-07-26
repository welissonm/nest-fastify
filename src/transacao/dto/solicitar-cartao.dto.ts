import { CartaoTipo } from "../../cartoes/cartao-tipo.enum";

export class SolicitarCartaoDto {
  portador: string;
  tipo: CartaoTipo;
  rede: string;
  endereco: string;
}
