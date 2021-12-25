import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './databases/databases.module';
import { PedidosModule } from './pedidos/pedidoos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    PedidosModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
