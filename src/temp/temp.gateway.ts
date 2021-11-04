import { InjectModel } from "@nestjs/mongoose";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Model } from "mongoose";
import { Server, Socket } from "socket.io";
import { Temp, TempDocument } from "src/schemas/temp.schema";

@WebSocketGateway({ namespace: "chat" })
export class TempGateWay implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(@InjectModel(Temp.name) private tempModel: Model<TempDocument>) { }

    @WebSocketServer() server: Server;

    @SubscribeMessage("toServer")
    async toServer(@MessageBody() data: string, @ConnectedSocket() client: Socket): Promise<string> {
        const doc = new this.tempModel({ data: data });
        await doc.save();
        console.log("server: from " + client.id + ": " + data);
        console.log((await this.server.fetchSockets()));
        return data;
    }

    afterInit(server: Server) {

    }

    handleDisconnect(client: Socket) {

    }

    handleConnection(client: Socket, ...args: any[]) {
        console.log(client.handshake.query.roomid);
    }
}
