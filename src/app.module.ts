import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { HttpModule, HttpService } from '@nestjs/axios';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import  config  from 'src/config';
import configSchema from 'configSchema';


@Module({
  imports:[
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV]||'.env',
      load: [config],
      isGlobal:true,
      validationSchema:configSchema
    }),
    HttpModule,
    CustomersModule,
    ProductsModule,
    DatabaseModule
  ],
  controllers: [AppController],
})
export class AppModule {}