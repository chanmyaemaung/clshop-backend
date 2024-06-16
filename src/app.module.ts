import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './domain/users/users.module';
import { EnvModule } from './env/env.module';
import { OrdersModule } from './domain/orders/orders.module';

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule, EnvModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
