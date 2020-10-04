import { Agenda } from '../../domain/models/Agenda'
import { ICreateAgendaRequestDTO } from '../../domain/DTO/AgendaDTO'
import knex from '../../database/connection';
import { IAgendaRepository } from '../IAgendaRepository';

export class AgendaRepository implements IAgendaRepository {

    async get(): Promise<Agenda[]> {

        const agendas: Agenda[] = await knex('produtoServicos')
        .select([
            'produtoServicos.entityId as id',
            'agenda.data as data',
            'clientes.entityId as customerId',           
            'funcionarios.name as employeeName',
            'clientes.name as customerName',
            'produtos.description as product',
            'servicos.description as service'
        ])
        .innerJoin('agenda', 'agenda.id', 'produtoServicos.idAgenda')
        .innerJoin('produtos', 'produtos.id', 'produtoServicos.idProduto')
        .innerJoin('servicos', 'servicos.id', 'produtoServicos.idServicos')
        .innerJoin('funcionarios', 'funcionarios.id', 'agenda.employeeId')
        .innerJoin('clientes', 'clientes.id', 'agenda.customerId')

        return agendas
    }

    async getById(id: string): Promise<Agenda> {
        const agenda : Agenda = await knex('produtoServicos')
        .select([
            'produtoServicos.entityId as id',
            'agenda.data as data',
            'clientes.entityId as customerId',           
            'funcionarios.name as employeeName',
            'clientes.name as customerName',
            'produtos.description as product',
            'servicos.description as service'
        ])
        .innerJoin('agenda', 'agenda.id', 'produtoServicos.idAgenda')
        .innerJoin('produtos', 'produtos.id', 'produtoServicos.idProduto')
        .innerJoin('servicos', 'servicos.id', 'produtoServicos.idServicos')
        .innerJoin('funcionarios', 'funcionarios.id', 'agenda.employeeId')
        .innerJoin('clientes', 'clientes.id', 'agenda.customerId')
        .where('produtoServicos.entityId', id).first()

        return agenda
    }

    async create(agenda: Agenda): Promise<number[]> {

        return await knex('agenda').insert(agenda)
        
    }

    async update(agenda: ICreateAgendaRequestDTO, id: string): Promise<void> {

        await knex('agenda').where('entityId', id).update({
            data: agenda.data,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('produtoServicos').where('entityId', id).del()

    }
}