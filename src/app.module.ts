import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosGateway } from './common/sockets/usuarios/usuarios.gateway';
import mongoose from 'mongoose';


@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: async () => {
      const logger = new Logger('MongoDB');
      try {
        await mongoose.connect('mongodb://localhost:27017/api-usuarios', {
        });
        logger.log('Conexión a MongoDB establecida');
        return { uri: 'mongodb://localhost:27017/api-usuarios' };
      } catch (error) {
        logger.error('Error al conectar a MongoDB', error.message);
        throw new Error('No se pudo conectar a MongoDB');
      }
    },
  }),
    UsersModule,
    AuthModule,
  ],
  providers: [UsuariosGateway],
  
})
export class AppModule {}
