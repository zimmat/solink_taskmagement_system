import { DataSource } from 'typeorm';

const connectDB = new DataSource({
  type: "postgres",
  host: "tai.db.elephantsql.com",
  port: 5432,
  username: "pbuugosh",
  password: "Mcuo0QPfPCKSxtlSLHdPBuvQgNhjOqAb",
  database: "pbuugosh",
 synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.js"],
  migrations: ["src/migrations/**/*.js"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
    subscribersDir: "src/subscribers"
  }
});

connectDB
.initialize()
.then(() => {
    console.log(`Data Source has been initialized`);
})
.catch((err) => {
    console.error(`Data Source initialization error`, err);
})

export default connectDB;



  