import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { 
  SolicitarCartaoDto, 
  SolicitarBloqueioDto, 
  SolicitarDesbloqueioDto 
} from './dto';
import { TransacaoService } from './transacao.service';

@Controller('transacao')
export class TransacaoController {
  constructor(private readonly transacaoService: TransacaoService) {}

  @Post('cartao')
  solicitarCartao(@Body() solicitarCartaoDto: SolicitarCartaoDto) {
    return this.transacaoService.solicitarCartao(solicitarCartaoDto);
  }

  @Patch('cartao/bloqueio')
  solicitarBloqueio(@Body() solicitarBloqueioDto: SolicitarBloqueioDto){

  }

  @Patch('cartao/desbloqueio')
  solicitarDesbloqueio(@Body() solicitarDesbloqueioDto: SolicitarDesbloqueioDto){
    
  }

  @Delete('cartao/cancelar')
  cancelarCartao(@Param('id') id: string) {
    return this.transacaoService.remove(+id);
  }

  @Get()
  findAll() {
    return this.transacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacaoService.findOne(+id);
  }

}
