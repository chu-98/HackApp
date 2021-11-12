import { Profile } from "src/schemas/profile.schema";
import { User } from "src/schemas/user.schema";

export class MajorUserResponseDto {
    readonly email: string;
    readonly major: string;
    readonly name: string;
    readonly imgUrl: string;
    readonly specialties: string[];

    constructor(profile: Profile) {
        this.email = profile.email;
        this.major = profile.major;
        this.name = profile.name;
        this.imgUrl = profile.imgUrl;
        this.specialties = profile.specialties;
    }
};