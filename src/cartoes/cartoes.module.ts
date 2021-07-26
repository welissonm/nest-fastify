import { Module } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CartoesController } from './cartoes.controller';

@Module({
  controllers: [CartoesController],
  providers: [CartoesService]
})
export class CartoesModule {}
