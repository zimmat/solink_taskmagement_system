import { DataSource } from 'typeorm';

const connectDB = () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'tai.db.elephantsql.com',
    port: 5432,
    username: 'foqxceof',
    password: 'wr6zRy6eLjWFckHxiaudUSS5xwbKTRRR',
    database: 'foqxceof',
    synchronize: true,
    logging: false,
    entities: ['src/entities/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    extra : {
      "poolSize": 40
    }
  })
  return dataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized');
    return dataSource; 
  })
  .catch((err) => {
    console.error('Data Source initialization error', err);
    throw err; 
  });
}

export { connectDB };



  