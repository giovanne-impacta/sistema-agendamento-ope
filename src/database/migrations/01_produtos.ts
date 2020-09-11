import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('description', 30).notNullable();
        table.integer('quantity').notNullable();
        table.decimal('value').notNullable();
        table.dateTime('createdDate').notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('produtos')
}

