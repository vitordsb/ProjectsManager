import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { join } from "path";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory { 
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            database: 'nestjs_pp',
            username: 'root',
            password: '2419',
            host: 'localhost',
            port: 3306,
            synchronize: false,
            type: 'mysql',
            entities: [join(__dirname, '..','**/*entity.{ts,js}')],
            migrations: [join(__dirname, '..', './database/migration.{ts,js}')],
            namingStrategy: new SnakeNamingStrategy(),
        };
    }
}