import { Profile } from "src/schemas/profile.schema";
import { User } from "src/schemas/user.schema";

export class BestUserResponseDto {
    readonly email: string;
    readonly name: string;
    readonly imgUrl: string;
    readonly likeCount: number;
    readonly specialties: string[];

    constructor(user: User, profile: Profile) {
        this.email = user.email;
        this.name = profile.name;
        this.imgUrl = profile.imgUrl;
        this.likeCount = user.likeCount;
        this.specialties = profile.specialties;
    }
};