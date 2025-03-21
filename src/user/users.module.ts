import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schemas';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { jwtSecretkey } from 'src/constant/constant';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),JwtModule.register({
        secret: jwtSecretkey.secret, // Cambia esto por una clave segura
        signOptions: { expiresIn: '60s' },
      })],
    controllers: [UsersController],
  providers: [UsersService],   
  exports: [UsersService],
     
})

export class UsersModule { }
