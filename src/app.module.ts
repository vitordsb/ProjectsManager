import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/data-source';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({useClass: TypeOrmConfigService}), ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
