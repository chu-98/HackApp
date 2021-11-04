import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Temp, TempDocument } from 'src/schemas/temp.schema';

@Injectable()
export class TempService {
    constructor(@InjectModel(Temp.name) private tempModel: Model<TempDocument>) { }
    async push(data: string): Promise<TempDocument> {
        const doc = new this.tempModel({ data: data });
        return await doc.save();
    }

    async pop(data: string): Promise<TempDocument[]> {
        const docs = await this.tempModel.find({ data: data }).exec();
        return await Promise.all(docs.map(async doc => await doc.delete()));
    }
}
