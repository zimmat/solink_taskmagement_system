import { DataSource } from 'typeorm';

async function runMigrations() {
  try {
    const connection = new DataSource({
      type: 'postgres',
      host: 'tai.db.elephantsql.com',
      port: 5432,
      username: 'pbuugosh',
      password: 'Mcuo0QPfPCKSxtlSLHdPBuvQgNhjOqAb',
      database: 'pbuugosh',
      synchronize: true,
      logging: false,
      entities: ['src/entities/**/*.ts'],
      migrations: ['src/migrations/**/*.ts'],
    });

    // Initialize connection
    await connection.initialize();

    console.log(`Data Source has been initialized`);

    // Run migrations
    await connection.runMigrations();

    console.log('Migrations have been run successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
}

runMigrations();