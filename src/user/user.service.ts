import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from 'src/schemas/profile.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { MyInfoResponseDto } from './dto/myinfo.response.dto';

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
}
