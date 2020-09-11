import { Servicos } from '../../domain/models/Servicos'
import knex from '../../database/connection';
import { IServicosRepository } from "../IServicosRepository";

export class ServicosRepository implements IServicosRepository {

    async getServices(): Promise<Servicos[]> {
        const servicos : Servicos[] = await knex('servicos')

        return servicos
    }

    async getServiceById(id: string): Promise<Servicos> {
        const servico : Servicos = await knex('servicos').where('entityId', id).first()

        return servico
    }

    async create(servico: Servicos): Promise<void> {

        await knex('servicos').insert(servico)

    }

    async update(servico: Servicos, id: string): Promise<void> {

        await knex('servicos').where('entityId', id).update({
            description: servico.description,
            value: servico.value,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('servicos').where('entityId', id).del()

    }
}