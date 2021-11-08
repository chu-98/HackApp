import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Keyword, KeywordDocument } from './schemas/keyword.schema';
import { Profile, ProfileDocument } from './schemas/profile.schema';
import { Univ, UnivDocument } from './schemas/univ.schema';
import { User, UserDocument } from './schemas/user.schema';
import csv from "csvtojson";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
    @InjectModel(Keyword.name) private keywordModel: Model<KeywordDocument>,
    @InjectModel(Univ.name) private univModel: Model<UnivDocument>) { }

  getHello(): string {
    return 'Hello Worldd!';
  }

  async insertUserData(): Promise<any[]> {
    let savedData = await this.userModel.find();
    if (savedData.length > 0)
      return savedData;

    let userData = await csv().fromFile("./src/resources/user.csv");
    await Promise.all(userData.map(async data => {
      const model = new this.userModel(data);
      await model.save();
    }));
    return userData;
  }

  async insertProfileData(): Promise<any[]> {
    let savedData = await this.profileModel.find();
    if (savedData.length > 0)
      return savedData;

    let profileData = await csv().fromFile("./src/resources/profile.csv");
    profileData.forEach(async data => {
      ["interests", "career", "specialties"].forEach(x => data[x] = data[x].split(","));
      await Promise.all(data["interests"].map(async (keyword: string) =>
        await this.keywordModel.findOneAndUpdate({ name: keyword }, { $inc: { interests: 1 } })));
      await Promise.all(data["specialties"].map(async (keyword: string) =>
        await this.keywordModel.findOneAndUpdate({ name: keyword }, { $inc: { specialties: 1 } })));
    });
    await Promise.all(profileData.map(async data => {
      const model = new this.profileModel(data);
      await model.save();
    }));
    return profileData;
  }

  async insertKeywordData(): Promise<any[]> {
    let savedData = await this.keywordModel.find();
    if (savedData.length > 0)
      return savedData;

    let keywordData = await csv().fromFile("./src/resources/keyword.csv");
    await Promise.all(keywordData.map(async data => {
      const model = new this.keywordModel(data);
      await model.save();
    }));
    return keywordData;
  }

  async insertUnivData(): Promise<any[]> {
    let savedData = await this.univModel.find();
    if (savedData.length > 0)
      return savedData;

    let univData = await csv().fromFile("./src/resources/univ.csv");
    await Promise.all(univData.map(async data => {
      const model = new this.univModel(data);
      await model.save();
    }));
    return univData;
  }

  async insertDefaultData(): Promise<void> {
    await this.insertKeywordData();
    await this.insertUnivData();
    await this.insertUserData();
    await this.insertProfileData();
  }
}
