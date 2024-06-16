import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './domain/users/users.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule, EnvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
