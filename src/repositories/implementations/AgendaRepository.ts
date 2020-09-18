import { Agenda } from '../../domain/models/Agenda'
import { ICreateAgendaRequestDTO } from '../../domain/DTO/AgendaDTO'
import knex from '../../database/connection';
import { IAgendaRepository } from '../IAgendaRepository';

export class AgendaRepository implements IAgendaRepository {

    async get(): Promise<Agenda[]> {
        const agendas : Agenda[] = await knex('agenda')

        return agendas
    }

    async getById(id: string): Promise<Agenda> {
        const agenda : Agenda = await knex('agenda').where('entityId', id).first()

        return agenda
    }

    async create(agenda: Agenda): Promise<void> {

        await knex('agenda').insert(agenda)
        
    }

    async update(agenda: ICreateAgendaRequestDTO, id: string): Promise<void> {

        await knex('clientes').where('entityId', id).update({
            data: agenda.data,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('agenda').where('entityId', id).del()

    }
}