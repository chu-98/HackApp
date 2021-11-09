import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use("/public", express.static(process.env.IMG_DIR));
  await app.listen(3000);
}
bootstrap();
