import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "hey_freela",
  synchronize: true,
  logging: true,
  entities: ["../../models/**.ts"],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
