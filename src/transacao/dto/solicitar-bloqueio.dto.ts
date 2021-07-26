import { MotivoBloqueio } from "../enums/motivo-bloqueio.enum";

export class SolicitarBloqueioDto {
  cartao: string;
  motivo: MotivoBloqueio;
}