import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Temp, TempSchema } from 'src/schemas/temp.schema';
import { TempController } from './temp.controller';
import { TempGateWay } from './temp.gateway';
import { TempService } from './temp.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Temp.name, schema: TempSchema }])],
  controllers: [TempController],
  providers: [TempService, TempGateWay]
})
export class TempModule { }
