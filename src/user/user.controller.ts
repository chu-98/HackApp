import { Controller, Get } from '@nestjs/common';
import { Profile } from 'src/schemas/profile.schema';
import { User } from 'src/schemas/user.schema';
import { MyInfoResponseDto } from './dto/myinfo.response.dto';
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
}
