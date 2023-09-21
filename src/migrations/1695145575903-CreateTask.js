import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

class CreateTask1695145575903 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'completed',
            type: 'boolean',
            default: false,
          },
          {
            name: 'userId',
            type: 'int',
          },
        ],
      })
    );

    // Add a foreign key constraint to link 'userId' column with 'users' table
    await queryRunner.createForeignKey(
      'tasks',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE', // Adjust this based on your requirements
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('tasks');
  }
}

export default CreateTask1695145575903;



