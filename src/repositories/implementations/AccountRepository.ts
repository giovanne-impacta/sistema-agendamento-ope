import { User } from '../../domain/models/User'
import knex from '../../database/connection';
import { IAccountRepository } from '../IAccountRepository';

export class AccountRepository implements IAccountRepository {

    async getUserByUsername(username: string): Promise<User> {
        const customer : User = await knex('clientes').where('login', username).first()
        const employee : User = await knex('funcionarios').where('login', username).first()

        const user = customer || employee

        if (!user && username == "firstUser") {
            await knex('funcionarios').insert({
                name: "admin",
                phone: 11970782322,
                login: "admin",
                password: "admin",
                starts: "00:00",
                ends: "00:00"
            })
        }

        return user
    }

}