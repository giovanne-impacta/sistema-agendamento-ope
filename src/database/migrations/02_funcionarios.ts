import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('funcionarios', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('name', 30).notNullable();
        table.string('telefone', 11).notNullable();
        table.string('tipo', 10).notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('funcionarios')
}

