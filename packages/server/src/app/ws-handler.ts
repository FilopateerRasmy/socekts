import { IncomingMessage } from "http";
import { WebSocket, WebSocketServer, ServerOptions } from "ws";

export class WsHandler {
    private wsServer: WebSocketServer;

    initialize(options:ServerOptions){
        this.wsServer = new WebSocketServer(options)
        this.wsServer.on('listening', ()=> console.log(`server is listening on port: ${options.port}`))
        this.wsServer.on('connection', (socket, request)=> this.onSocketConnection(socket, request))
    }

    onSocketConnection(socket:WebSocket, request:IncomingMessage){
        console.log(`user connected`)
    }
}