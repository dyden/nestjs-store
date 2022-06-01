import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, 
  }
  ));

  const options = new DocumentBuilder()
  .setTitle('NestJS Store API')
  .setDescription('API for NestJS Store')
  .setVersion('1.0')
  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
