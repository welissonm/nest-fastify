import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartoesModule } from './cartoes/cartoes.module';
import { RedeModule } from './rede/rede.module';
import { HistoricoModule } from './historico/historico.module';
import { TransacaoModule } from './transacao/transacao.module';

@Module({
  imports: [CartoesModule, RedeModule, HistoricoModule, TransacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
