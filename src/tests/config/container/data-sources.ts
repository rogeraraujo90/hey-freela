import { container } from "tsyringe";
import { DataSource } from "typeorm";
import AppTestsDataSource from "../database/data-sources";

container.register<DataSource>("DataSource", { useValue: AppTestsDataSource });
