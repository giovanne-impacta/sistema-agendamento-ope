import { ProductService } from '../../domain/models/ProductService'
import knex from '../../database/connection';
import { IProductServiceRepository } from '../IProductServiceRepository';

export class ProductServiceRepository implements IProductServiceRepository {



    async create(agendamento: ProductService): Promise<number[]> {

        return await knex('produtoServicos').insert(agendamento)
        
    }

    async delete(id: string): Promise<void> {

        await knex('produtoServicos').where('entityId', id).del()

    }
}