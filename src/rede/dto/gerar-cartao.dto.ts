import { Rede } from "../entities/rede.entity";

export interface GerarCartao {
  numero: string;
  rede: Rede;
  dataVencimento: Date;
  cvv: string;
}