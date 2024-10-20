import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from './data-source';

const database = new TypeOrmConfigService();

export const dataConfigMigrations = new DataSource(
  database.createTypeOrmOptions() as DataSourceOptions,
);
