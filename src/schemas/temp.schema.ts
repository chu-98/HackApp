import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TempDocument = Temp & Document;

@Schema({ timestamps: true })
export class Temp {
    @Prop()
    data: string;
}

export const TempSchema = SchemaFactory.createForClass(Temp);