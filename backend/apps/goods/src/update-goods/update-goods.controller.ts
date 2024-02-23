import { MicroservicesEndpoints } from '@app/microservices';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateGoodsService } from './update-goods.service';

@Controller()
export class UpdateGoodsController {
  constructor(private readonly updateGoodsService: UpdateGoodsService) {}

  @MessagePattern(MicroservicesEndpoints.updateGoods)
  update(@Payload() updateUpdateGoodDto: any) {
    return this.updateGoodsService.update(updateUpdateGoodDto.id, updateUpdateGoodDto);
  }
}
