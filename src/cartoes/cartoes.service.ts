import { Injectable } from '@nestjs/common';

@Injectable()
export class CartoesService {
  create(createCartoeDto: any) {
    return 'This action adds a new cartoe';
  }

  findAll() {
    return `This action returns all cartoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartoe`;
  }

  update(id: number, updateCartoeDto: any) {
    return `This action updates a #${id} cartoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartoe`;
  }
}
