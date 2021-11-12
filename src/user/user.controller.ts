import { Controller, Get, Query } from '@nestjs/common';
import { Profile } from 'src/schemas/profile.schema';
import { User } from 'src/schemas/user.schema';
import { BestUserResponseDto } from './dto/bestuser.response.dto';
import { MajorUserResponseDto } from './dto/majoruser.response.dto';
import { MyInfoResponseDto } from './dto/myinfo.response.dto';
import { RecommendResponseDto } from './dto/recommend.response.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get("/myprofile")
    async myProfile(): Promise<Profile> {
        return this.userService.myProfile();
    }

    @Get("/myinfo")
    async myInfo(): Promise<MyInfoResponseDto> {
        return this.userService.myInfo();
    }

    @Get("/best")
    async bestUser(@Query("univid") univid: number): Promise<BestUserResponseDto[]> {
        return await this.userService.bestUser(univid);
    }

    @Get("/major")
    async majorUser(@Query("univid") univid: number, @Query("major") major: string): Promise<MajorUserResponseDto[]> {
        return await this.userService.majorUser(univid, major);
    }

    @Get("/recommend")
    async recommendUser(): Promise<RecommendResponseDto[]> {
        return await this.userService.recommendUser();
    }

    @Get("/profile")
    async getProfile(@Query("email") email: string): Promise<Profile> {
        return await this.userService.getProfile(email);
    }
}
