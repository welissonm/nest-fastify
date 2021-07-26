import { Injectable } from '@nestjs/common';

import { RedeService } from 'src/rede/rede.service';
import { CriarCartaoDto } from './dto/criar-cartao.dto';
import { FindQuery } from './find-query.interface';

@Injectable()
export class CartoesService {
  constructor(private readonly redeService: RedeService){

  }
  async create(criarCartaoDto: CriarCartaoDto) {
    const mascara = await this.redeService.gerarCartao(criarCartaoDto.rede)
    
  }

  findAll(filters?: FindQuery) {
    return `This action returns all cartoes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cartoe`;
  }

  findByPortador(id: string) {

  }
}
