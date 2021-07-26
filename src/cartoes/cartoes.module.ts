import { Module } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CartoesController } from './cartoes.controller';
import { RedeModule } from 'src/rede/rede.module';

@Module({
  controllers: [CartoesController],
  imports: [RedeModule],
  providers: [CartoesService]
})
export class CartoesModule {}
