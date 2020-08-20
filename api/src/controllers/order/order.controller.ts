import { Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrderById(): string {
    return this.orderService.getHello();
  }

  @Get()
  getOrders(): string {
    return this.orderService.getHello();
  }

  @Post()
  createOrder(): string {
    return this.orderService.getHello();
  }
}
