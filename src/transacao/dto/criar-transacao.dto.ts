import { Transacao } from "../entities/transacao.entity";
import { OmitType } from '@nestjs/swagger';

export class CriarTransacaoDto extends OmitType(Transacao, ['id', 'data'] as const) {}