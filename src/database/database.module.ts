import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {  
        entities: ['src/**/*.entity.ts']
        const { user, host, db, password, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: db,
          synchronize:true,
          autoLoadEntities:true,

        }
      }, 
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'PG', 
      useFactory: (configService: ConfigType<typeof config>) => { 
        const { user, host, db, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: db,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG',TypeOrmModule],
})
export class DatabaseModule {}