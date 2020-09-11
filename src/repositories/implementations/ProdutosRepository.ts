import { Produtos } from '../../domain/models/Produtos'
import knex from '../../database/connection';
import { IProdutosRepository } from '../IProdutosRepository';

export class ProdutosRepository implements IProdutosRepository {

    async getProdutos(): Promise<Produtos[]> {
        const produtos : Produtos[] = await knex('produtos')

        return produtos
    }

    async getProdutosById(id: string): Promise<Produtos> {
        const produto : Produtos = await knex('produtos').where('entityId', id).first()

        return produto
    }

    async create(produto: Produtos): Promise<void> {

        await knex('produtos').insert(produto)

    }

    async update(produto: Produtos, id: string): Promise<void> {

        await knex('produtos').where('entityId', id).update({
            description: produto.description,
            quantity: produto.quantity,
            value: produto.value
        })
    }

    async delete(id: string): Promise<void> {

        await knex('produtos').where('entityId', id).del()

    }
}