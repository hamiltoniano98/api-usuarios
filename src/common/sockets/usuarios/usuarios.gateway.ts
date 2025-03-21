import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ cors: true })
export class UsuariosGateway {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(UsuariosGateway.name);


  @SubscribeMessage('mensaje')
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): string {
    this.logger.log(`Mensaje recibido: ${data}`);
    this.server.emit('mensaje', `Servidor responde: ${data}`); 
    return `Mensaje recibido: ${data}`;
  }

 
  @SubscribeMessage('operacion')
  handleOperation(
    @MessageBody() payload: { usuario: string; operacion: string },
    @ConnectedSocket() client: Socket,
  ): void {
    this.logger.log(
      `El usuario ${payload.usuario} realizó la operación ${payload.operacion}`,
    );
    this.server.emit('mensaje', `El usuario ${payload.usuario} realizó la operación ${payload.operacion}`);
  }
}