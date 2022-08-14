import { DataSource } from "typeorm";
import path from "path";

const AppTestsDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "hey_freela_test",
  dropSchema: true,
  synchronize: true,
  logging: false,
  migrationsRun: true,
  entities: [path.join(__dirname, "../../../models/*.ts")],
  subscribers: [],
  migrations: [],
});

export default AppTestsDataSource;
