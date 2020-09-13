import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('clientes', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('name', 30).notNullable();
        table.string('phone', 11).notNullable();
        table.string('login', 10).notNullable();
        table.string('password').notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('clientes')
}

