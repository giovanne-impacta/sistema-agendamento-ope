import { IAgendaRepository } from '../repositories/IAgendaRepository'
import { ICreateAgendaRequestDTO } from '../domain/DTO/AgendaDTO';
import { Agenda } from '../domain/models/Agenda';

export class AgendaService {
    
    constructor ( 
        private agendaRepository: IAgendaRepository
        ){}

    async create(data: ICreateAgendaRequestDTO) {

        await this.agendaRepository.create(data);
    }

    async getAll() {
        const agendas: Agenda[] = await this.agendaRepository.get()

        return agendas
    }

    async getById(id: string) {
        const agenda: Agenda = await this.agendaRepository.getById(id)

        return agenda
    }

    async update(data: ICreateAgendaRequestDTO, id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');

        await this.agendaRepository.update(data, id);
    }

    async delete(id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');

        await this.agendaRepository.delete(id);
    }
}
