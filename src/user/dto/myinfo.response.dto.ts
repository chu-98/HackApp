import { User } from "src/schemas/user.schema";

export class MyInfoResponseDto {
    readonly email: string;
    readonly likeList: string[];
    readonly likeCount: number;
    readonly chatroomList: string[];

    constructor(user: User) {
        this.email = user.email;
        this.likeList = user.likeList;
        this.likeCount = user.likeCount;
        this.chatroomList = user.chatroomList;
    }
};