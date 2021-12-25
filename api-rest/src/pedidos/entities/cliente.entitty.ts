import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('clientes')
export class ClientetEntity {

    @PrimaryGeneratedColumn({ name: 'clienteid' })
    clienteId: number;

    @Column({name: 'cedula_ruc'})
    cedulaRuc: string;

    @Column({name: 'nombrecia'})
    nombrecia: string;

    @Column({name: 'nombrecontacto'})
    nombreContacto: string;

    @Column({ name: 'direccioncli' })
    direccionCli: string;

    @Column({name:'fax'})
    fax: string

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'celular' })
    celular: string;

    @Column({ name: 'fijo' })
    fijo: string;
}