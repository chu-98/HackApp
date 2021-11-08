import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Keyword, KeywordSchema } from './schemas/keyword.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';
import { Univ, UnivSchema } from './schemas/univ.schema';
import { User, UserSchema } from './schemas/user.schema';
import { TempModule } from './temp/temp.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    MongooseModule.forRoot(process.env.NODE_ENV == "dev" ?
      "mongodb://localhost:27017/nest" : "mongodb://mongodb:27017/nest"),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Profile.name, schema: ProfileSchema },
      { name: Keyword.name, schema: KeywordSchema },
      { name: Univ.name, schema: UnivSchema }]),
    TempModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
