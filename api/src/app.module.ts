import { Module } from '@nestjs/common';

import { OrderController } from './controllers/order/order.controller';
import { OrderService } from './controllers/order/order.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule {}
