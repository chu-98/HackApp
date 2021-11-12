import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, NumericTypes } from 'mongoose';
import { Profile, ProfileDocument } from 'src/schemas/profile.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { BestUserResponseDto } from './dto/bestuser.response.dto';
import { MajorUserResponseDto } from './dto/majoruser.response.dto';
import { MyInfoResponseDto } from './dto/myinfo.response.dto';
import { RecommendResponseDto } from './dto/recommend.response.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async myProfile(): Promise<Profile> {
        return await this.profileModel.findOne({ email: "test_a@hanyang.ac.kr" }).exec();
    }

    async myInfo(): Promise<MyInfoResponseDto> {
        const user = await this.userModel.findOne({ email: "test_a@hanyang.ac.kr" }).exec();
        const dto = new MyInfoResponseDto(user);
        return dto;
    }

    async getProfile(email: string): Promise<Profile> {
        return await this.profileModel.findOne({ email: email }).exec();
    }

    async bestUser(univid: number): Promise<BestUserResponseDto[]> {
        const myProfile = await this.myProfile();
        const users = await this.userModel.find({
            univid: univid,
            email: { $ne: myProfile.email }
        }).sort("-likeCount").limit(8).exec();
        const profiles = await Promise.all(users.map(
            async user => await this.profileModel.findOne({ email: user.email }).exec()
        ));
        return [...Array(users.length).keys()].map(i => new BestUserResponseDto(users[i], profiles[i]));
    }

    async majorUser(univid: number, major: string): Promise<MajorUserResponseDto[]> {
        const myProfile = await this.myProfile();
        const profiles = await this.profileModel.find({
            univid: univid,
            major: major,
            email: { $ne: myProfile.email }
        }).limit(6).exec();
        return profiles.map(profile => new MajorUserResponseDto(profile));
    }

    async recommendUser(): Promise<RecommendResponseDto[]> {
        const myProfile = await this.myProfile();
        const profiles = await this.profileModel.find({
            univid: myProfile.univid,
            specialties: { $in: myProfile.interests },
            email: { $ne: myProfile.email }
        }).exec();
        const users = await this.userModel.find({
            email: { $in: profiles.map(profile => profile.email) }
        }).sort("-likeCount").limit(4).exec();
        const filtered = profiles.filter(profile =>
            users.map(user => user.email).includes(profile.email));
        return [...Array(4).keys()].map(i => new RecommendResponseDto(users[i], filtered[i]));
    }
}
