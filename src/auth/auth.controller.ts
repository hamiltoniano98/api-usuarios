import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('register')
    register(@Body() registerdto: RegisterUserDto) {
        return this.authService.register(registerdto)
    }

    @Post('login')
    async login(@Body() loginuserdto: LoginUserDto, @Res() res: Response) {
        const token = await this.authService.login(loginuserdto)
        if (!token) {
            return res.json({ message: 'Inicio de sesión fallido' });
        }
        res.cookie('jwt', token, {
            httpOnly: true, secure: true,
            maxAge: 3600000,
        })
        return res.json({ message: 'Inicio de sesión exitoso' });
    }


    @Get()
    findAll(@Req() request: Request) {
        console.log(request.cookies); // or "request.cookies['cookieKey']"
        // or console.log(request.signedCookies);
    }


}
