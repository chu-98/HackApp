import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UnivDocument = Univ & Document;

@Schema()
export class Univ {
    @Prop({ unique: true })
    univid: number;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    domain: string;

    @Prop({ default: 0 })
    count: number;
}

export const UnivSchema = SchemaFactory.createForClass(Univ);