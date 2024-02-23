import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateGoodsService {
  update(id: number, updateUpdateGoodDto: any) {
    return `This action updates a #${id} updateGood`;
  }
}
