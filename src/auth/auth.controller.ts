import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post('register')
    register(@Body() registerdto:RegisterUserDto){
        return this.authService.register(registerdto)
    }

    @Post('login')
    async login(@Body() loginuserdto:LoginUserDto,@Res() res){
        const token= await this.authService.login(loginuserdto)
        res.cookie('jwt',token,{httppOnly:true})
        return res.json({ message: 'Inicio de sesión exitoso' });
    }
}
