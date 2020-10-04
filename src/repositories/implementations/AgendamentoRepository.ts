import { Agendamento } from '../../domain/models/Agendamento'
import knex from '../../database/connection';
import { IAgendamentoRepository } from '../IAgendamentoRepository';

export class ProductServiceRepository implements IAgendamentoRepository {



    async create(agendamento: Agendamento): Promise<number[]> {

        return await knex('agendamento').insert(agendamento)
        
    }

    async delete(id: string): Promise<void> {

        await knex('agendamento').where('entityId', id).del()

    }
}