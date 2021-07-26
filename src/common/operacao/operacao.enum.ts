import { OperacaoStatus } from "./operacao-status.enum";

export abstract class Operacao {
  uuid: string;
  nome: string;
  status: OperacaoStatus;
  operacoes: Operacao[]
}