import { Controller, Get, Param } from '@nestjs/common';
import { TempService } from './temp.service';
import { io } from 'socket.io-client';

@Controller('temp')
export class TempController {
    constructor(private readonly tempService: TempService) { }
    @Get("push/:data")
    async push(@Param("data") data: string) {
        return await this.tempService.push(data);
    }

    @Get("pop/:data")
    async pop(@Param("data") data: string) {
        return await this.tempService.pop(data);
    }

    @Get("send/:data")
    send(@Param("data") data: string): string {
        const sender = io("http://localhost:3000/chat", {
            transports: ["websocket"],
            query: {
                "roomid": "1234"
            }
        });
        sender.emit("toServer", data);
        return "ok";
    }
}
