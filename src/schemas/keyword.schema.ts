import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type KeywordDocument = Keyword & Document;

@Schema()
export class Keyword {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ default: 0 })
    interests: number;

    @Prop({ default: 0 })
    specialties: number;

    @Prop({ required: true })
    category: number;
}

export const KeywordSchema = SchemaFactory.createForClass(Keyword);