import { CartaoTipo } from "../../cartoes/cartao-tipo.enum";

export class SolicitarCartao {
  portador: string;
  tipo: CartaoTipo;
  rede: string;
  endereco: string;
}
