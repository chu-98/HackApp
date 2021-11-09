import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({ timestamps: true })
export class Profile {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    univid: number;

    @Prop({ required: true })
    univName: string;

    @Prop({ required: true })
    grade: number;

    @Prop({ required: true })
    major: string;

    @Prop({ default: "a.png" })
    imgUrl: string;

    @Prop()
    career: string[];

    @Prop()
    specialties: string[];

    @Prop()
    interests: string[];

    @Prop({ default: [0, 0, 0, 0, 0] })
    review: number[];

    @Prop({ default: "" })
    message: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);