import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecretkey } from 'src/constant/constant';

@Module({
  imports:[UsersModule,
    JwtModule.register({
    secret: jwtSecretkey.secret, // Cambia esto por una clave segura
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
