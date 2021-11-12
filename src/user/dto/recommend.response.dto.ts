import { Profile } from "src/schemas/profile.schema";
import { User } from "src/schemas/user.schema";

export class RecommendResponseDto {
    readonly email: string;
    readonly major: string;
    readonly name: string;
    readonly imgUrl: string;
    readonly likeCount: number;
    readonly specialties: string[];
    readonly career: string[];
    readonly message: string;

    constructor(user: User, profile: Profile) {
        this.email = user.email;
        this.major = profile.major;
        this.name = profile.name;
        this.imgUrl = profile.imgUrl;
        this.likeCount = user.likeCount;
        this.specialties = profile.specialties;
        this.career = profile.career;
        this.message = profile.message;
    }
};