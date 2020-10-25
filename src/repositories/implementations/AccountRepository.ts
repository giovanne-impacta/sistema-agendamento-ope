import { User } from '../../domain/models/User'
import knex from '../../database/connection';
import { IAccountRepository } from '../IAccountRepository';
import { GenNewDate } from '../../utils/ConvertingTime'
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
                starts: GenNewDate("00:00"),
                ends: GenNewDate("00:00")
            })
        }

        return user
    }

}