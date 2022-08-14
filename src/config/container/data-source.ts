import { container } from "tsyringe";
import { DataSource } from "typeorm";
import AppDataSource from "../database/data-sources";

container.register<DataSource>("DataSource", { useValue: AppDataSource });
