import { DataSource } from "typeorm";
import path from "path";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "hey_freela",
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, "../../models/*.js")],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
