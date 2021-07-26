import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Query 
} from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { FindQuery } from './find-query.interface';

@Controller('cartoes')
export class CartoesController {
  constructor(private readonly cartoesService: CartoesService) {}

  @Get()
  findAll(@Query() query: FindQuery) {
    console.log(query);
    return this.cartoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartoesService.findOne(+id);
  }

  @Get('portador/:id')
  findByPortador(){

  }

}
