import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { join } from "path";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory { 
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            database: 'nestjs-pp',
            username: 'root',
            password: 'root',
            synchronize: false,
            port: 3306,
            host: 'localhost',
            type: 'mysql',
            entities: [join(__dirname, '..','**/*entity.{ts,js}')],
            migrations: [join(__dirname, '..', './database/migration.{ts,js}')],
            namingStrategy: new SnakeNamingStrategy(),
        };
    }
}