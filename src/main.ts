import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { environmentsVariables } from './config';

async function main() {
  const logger = new Logger('Gateway');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // whitelist elimina propiedades no permitidas dentro de las peticiones
      forbidNonWhitelisted: true, // forbidenNonWhitelisted prohibe las propiedades no permitidas
      transform: true,
    }),
  );

  await app.listen(environmentsVariables.port);
  logger.log('Gateway is running on port ${environmentVariables.port}');
}
main();
