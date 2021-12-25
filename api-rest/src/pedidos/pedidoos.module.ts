import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PedidosService } from './services/pedidos.service';
import { PedidosController } from './controllers/pedidos.controller';
import { ClientetEntity } from './entities/cliente.entitty';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        ClientetEntity,
    ]),
  ],
  providers: [PedidosService],
  controllers: [PedidosController]
})
export class PedidosModule { }
