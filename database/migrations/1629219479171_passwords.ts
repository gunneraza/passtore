import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Passwords extends BaseSchema {
  protected tableName = 'passwords'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.increments('id')
      table.string('title', 255)
      table.string('password', 255)
      table.string('url', 255)
      table.string('description', 255)
      table.integer('category_id').unsigned()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
