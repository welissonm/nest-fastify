import { CartaoStatus } from "./cartao-status.enum";
import { CartaoTipo } from "./cartao-tipo.enum";

export interface FindQuery {
  status?: CartaoStatus,
  tipo?: CartaoTipo
}