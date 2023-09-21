import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class CreateUser1695103720943 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('users');
  }
}

export default CreateUser1695103720943;
