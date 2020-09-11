import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('clientes', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('name', 30).notNullable();
        table.string('telefone', 11).notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('clientes')
}

