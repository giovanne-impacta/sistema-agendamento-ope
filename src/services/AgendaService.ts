import { IAgendaRepository } from '../repositories/IAgendaRepository'
import { IClienteRepository } from '../repositories/IClienteRepository'
import { IFuncionarioRepository } from '../repositories/IFuncionarioRepository'
import { FuncionarioRepository } from '../repositories/implementations/FuncionarioRepository'
import { ClienteRepository } from '../repositories/implementations/ClienteRepository'
import { ICreateAgendaRequestDTO } from '../domain/DTO/AgendaDTO';
import { Agenda } from '../domain/models/Agenda';
import { ConvertDateTime } from '../utils/ConvertingTime'

export class AgendaService {
    private employeeRepository: IFuncionarioRepository
    private customerRepository: IClienteRepository
    constructor ( 
        private agendaRepository: IAgendaRepository
    ){
        this.employeeRepository = new FuncionarioRepository
        this.customerRepository = new ClienteRepository
    }

    async create(data: ICreateAgendaRequestDTO) {
        var customer = await this.customerRepository.getById(data.customerId!)
        var employee = await this.employeeRepository.getById(data.employeeId!)
        var date = new Date(parseInt(data.data)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        var newAgenda = new Agenda({customerId: customer.id, employeeId: employee.id, data: date})

        await this.agendaRepository.create(newAgenda);
    }

    async getAll() {
        const agendas: Agenda[] = await this.agendaRepository.get()
        agendas.forEach(f => {
            f.data = ConvertDateTime(f.data, true)
        })
        return agendas
    }

    async getById(id: string) {
        const agenda: Agenda = await this.agendaRepository.getById(id)

        return agenda
    }

    async update(data: ICreateAgendaRequestDTO, id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');
        var newDate = new Date(parseInt(data.data)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        data.data = newDate

        await this.agendaRepository.update(data, id);
    }

    async delete(id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');

        await this.agendaRepository.delete(id);
    }
}
