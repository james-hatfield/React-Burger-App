import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderController } from './controllers/order/order.controller';
import { OrderService } from './controllers/order/order.service';

@Module({
  imports: [
    // Not sure if this is necessary with ormconfig.json
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     type: 'mssql',
    //     host: configService.get('DATABASE_HOST', 'localhost'),
    //     port: parseInt(configService.get('DATABASE_PORT', '5432'), 10),
    //     username: configService.get('DATABASE_USER', 'burgerapp'),
    //     password: configService.get('DATABASE_PASSWORD', 'pa55word'),
    //     database: configService.get('DATABASE_NAME', 'BurgerAppDB'),
    //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //     migrations: [__dirname + '/Migrations/**/*.js'],
    //     cli: {
    //       migrationsDir: __dirname + './Migrations',
    //     },
    //   }),
    // }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule {}
