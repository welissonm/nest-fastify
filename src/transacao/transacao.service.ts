import { Injectable } from '@nestjs/common';
import { CriarTransacaoDto, SolicitarCartaoDto } from './dto';
import { SOLICITACAO_CARTAO_CREDITO } from './constantes'

@Injectable()
export class TransacaoService {
  criarTransacao(criarTransacaoDto: CriarTransacaoDto) {
  }

  solicitarCartao(solidicarCartaoDto: SolicitarCartaoDto){
    const dto = new CriarTransacaoDto()
    dto.nome = SOLICITACAO_CARTAO_CREDITO
    dto.descricao = ''
    dto.usuario = ''
    const transacao = this.criarTransacao(dto)
  }

  findAll() {
    return `This action returns all transacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} transacao`;
  }
}
