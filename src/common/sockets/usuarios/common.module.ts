import { Module } from '@nestjs/common';
import { UsuariosGateway } from './usuarios.gateway';

@Module({
  providers: [UsuariosGateway],
  exports: [UsuariosGateway],
})
export class CommonModule {}