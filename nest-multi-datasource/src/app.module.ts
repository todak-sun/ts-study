import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comments/comment.entity';
import { envConfiguration } from './config/env.config';
import { PostsEntity } from './posts/posts.entity';
import { PostsModule } from './posts/posts.module';

export const MSSQL_CONNECTION = `MSSQL_CONNECTION`;
export const POSTGRES_CONNECTION = `POSTGRES_CONNECTION`;

@Module({
  imports: [
    envConfiguration,
    TypeOrmModule.forRootAsync({
      name: MSSQL_CONNECTION,
      useFactory: (configService: ConfigService) => {
        return {
          applicationName: `TEST_APP`,
          type: `mssql`,
          host: configService.get<string>(`MSSQL_HOST`),
          port: parseInt(configService.get<string>(`MSSQL_PORT`)),
          username: configService.get<string>(`MSSQL_USERNAME`),
          password: configService.get<string>(`MSSQL_PASSWORD`),
          database: configService.get<string>(`MSSQL_DATABASE`),
          synchronize: true,
          entities: [PostsEntity],
          // logging: [`query`],
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      name: POSTGRES_CONNECTION,
      useFactory: (configService: ConfigService) => {
        return {
          applicationName: `TEST_APP`,
          type: `postgres`,
          host: configService.get<string>(`POSTGRES_HOST`),
          port: configService.get<number>(`POSTGRES_PORT`),
          username: configService.get<string>(`POSTGRES_USERNAME`),
          password: configService.get<string>(`POSTGRES_PASSWORD`),
          database: configService.get<string>(`POSTGRES_DATABASE`),
          synchronize: true,
          entities: [CommentEntity],
          // logging: [`query`],
        };
      },
      inject: [ConfigService],
    }),
    PostsModule,
  ],
})
export class AppModule {}
