import { Injectable } from '@nestjs/common';
import { finance } from 'faker';
import { CreateRedeDto } from './dto/create-rede.dto';
import { GerarCartao } from './dto/gerar-cartao.dto';
import { UpdateRedeDto } from './dto/update-rede.dto';
import { Rede } from './entities/rede.entity';

@Injectable()
export class RedeService {
  create(createRedeDto: CreateRedeDto) {
    return 'This action adds a new rede';
  }

  findAll() {
    return `This action returns all rede`;
  }

  findOne(id: string): Promise<Rede | undefined> {
    return undefined
  }

  update(id: number, updateRedeDto: UpdateRedeDto) {
    return `This action updates a #${id} rede`;
  }

  remove(id: number) {
    return `This action removes a #${id} rede`;
  }

  async gerarCartao(redeId: string): Promise<GerarCartao>{
    const now =  new Date();
    now.setFullYear(now.getFullYear() + 4)
    const rede = await this.findOne(redeId)
    const cartaoDto: GerarCartao = {
      rede,
      numero: finance.creditCardNumber(rede.nome),
      cvv: finance.creditCardCVV(),
      dataVencimento: now
    }
    return cartaoDto
  }
}
