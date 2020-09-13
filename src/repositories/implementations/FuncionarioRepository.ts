import { Funcionario } from '../../domain/models/Funcionario'
import knex from '../../database/connection';
import { IFuncionarioRepository } from '../IFuncionarioRepository';

export class FuncionarioRepository implements IFuncionarioRepository {

    async get(): Promise<Funcionario[]> {
        const funcionarios : Funcionario[] = await knex('funcionarios')

        return funcionarios
    }

    async getById(id: string): Promise<Funcionario> {
        const funcionario : Funcionario = await knex('funcionarios').where('entityId', id).first()

        return funcionario
    }

    async create(cliente: Funcionario): Promise<void> {

        await knex('funcionarios').insert(cliente)

    }

    async update(cliente: Funcionario, id: string): Promise<void> {

        await knex('funcionarios').where('entityId', id).update({
            name: cliente.name,
            phone: cliente.phone,
            login: cliente.login,
            password: cliente.password
        })
    }

    async delete(id: string): Promise<void> {

        await knex('funcionarios').where('entityId', id).del()

    }
}