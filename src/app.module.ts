import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TempModule } from './temp/temp.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    MongooseModule.forRoot(process.env.NODE_ENV == "dev" ?
      "mongodb://localhost:27017/nest" : "mongodb://mongodb:27017/nest"),
    TempModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
