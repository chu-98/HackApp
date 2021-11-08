import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RequestDocument = Request & Document;

@Schema()
export class Request {
    @Prop({ required: true })
    mentor: string;

    @Prop({ required: true })
    mentee: string;

    @Prop({ required: true })
    category: string;

    @Prop({ default: "" })
    message: string;

    @Prop({ required: true })
    place: string;

    @Prop({ required: true })
    time: string;

    @Prop({ required: true })
    paymethod: string;

    @Prop({ default: 0 })
    status: number;
};

export const RequestSchema = SchemaFactory.createForClass(Request);