import { MotivoCancelamento } from "../enums/motivo-cancelamento.enum";

export class SolicitarCancelamentoDto {
  cartao: string;
  motivo: MotivoCancelamento;
}