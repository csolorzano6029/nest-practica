import { HttpException, HttpStatus, Injectable, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientetEntity } from '../entities/cliente.entitty';

@Injectable()
export class PedidosService {

    constructor(
        @InjectRepository(ClientetEntity)
        private clienteRepository: Repository<ClientetEntity>,
    ) { }
    async getAllCliente():Promise<ClientetEntity[]> {
        const cliente = await this.clienteRepository.find();
        return cliente;
    }
}
