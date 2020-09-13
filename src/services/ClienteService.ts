import { IClienteRepository } from '../repositories/IClienteRepository'
import { ICreateClienteRequestDTO } from '../domain/DTO/ClienteDTO';
import { Cliente } from '../domain/models/Cliente';

export class ClienteService {
    
    constructor ( 
        private clienteRepository: IClienteRepository
        ){}

    async create(ClienteData: ICreateClienteRequestDTO) {

        const cliente = new Cliente(ClienteData);

        await this.clienteRepository.create(cliente);
    }

    async getAll() {
        const cliente: Cliente[] = await this.clienteRepository.get()

        return cliente
    }

    async getById(id: string) {
        const cliente: Cliente = await this.clienteRepository.getById(id)

        return cliente
    }

    async update(ClienteData: ICreateClienteRequestDTO, id: string) {
        const clienteAlreadyExists = await this.clienteRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('cliente não encontrado.');

        const cliente = new Cliente(ClienteData);

        await this.clienteRepository.update(cliente, id);
    }

    async delete(id: string) {
        const clienteAlreadyExists = await this.clienteRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('cliente não encontrado.');

        await this.clienteRepository.delete(id);
    }
}
