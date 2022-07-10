import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from 'src/common/configuration/database.config';
import { validate } from 'src/common/configuration/env.validation';
import { AppController } from 'src/interface/root/app.controller';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TodoModule } from './todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('database') as DataSourceOptions,
      dataSourceFactory: async (options: DataSourceOptions) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
