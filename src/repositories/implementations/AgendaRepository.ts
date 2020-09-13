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

    async create(agenda: ICreateAgendaRequestDTO): Promise<void> {
        
        var customer = await knex('clientes').where('entityId', agenda.customerId).first()
        var employee = await knex('funcionarios').where('entityId', agenda.employeeId).first()

        await knex('agenda').insert({
            data: agenda.data,
            customerId: customer.id,
            employeeId: employee.id
        })

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