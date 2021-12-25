import {
    Body,
    Controller,
    Delete, Get,
    Post,
    Put,
    Param,
    Patch
} from '@nestjs/common';

import { PedidosService } from '../services/pedidos.service';

@Controller('pedidos')
export class PedidosController {
    constructor(
        private pedidosService: PedidosService
    ) { }

    @Get('/clientes')
    async getAllClientes() {
        return await this.pedidosService.getAllCliente();
    }
}
