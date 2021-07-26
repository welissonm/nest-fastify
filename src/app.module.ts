import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartoesModule } from './cartoes/cartoes.module';
import { RedeModule } from './rede/rede.module';
import { HistoricoModule } from './historico/historico.module';
import { TransacaoModule } from './transacao/transacao.module';
import config  from './config/'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['local.env', '.env'],
      isGlobal: true,
      ignoreEnvFile: false,
    }),
    TypeOrmModule.forRoot(config().ormconfig()),
    CartoesModule, 
    RedeModule, 
    HistoricoModule, 
    TransacaoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
