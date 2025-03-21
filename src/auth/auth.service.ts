import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService,
        private readonly jwtService:JwtService
    ){}
    async register(registerdto){
        const user=await this.userService.findforEmail(registerdto.email)
        if(user){
            throw new BadRequestException('Ya existe el usuario')
        }
        return await this.userService.create(registerdto)
        }
    async login(loginuserdto){
        const user=await this.userService.findforEmail(loginuserdto.email)
        if(!user){
            throw new BadRequestException('No existe el usuario')
            } 
        if (user.password!=loginuserdto.password){
            throw new BadRequestException('Contraseña incorrecta')
        }
        const payload={email:user.email}
        const token = await this.jwtService.signAsync(payload)
        const emails=user.email
        return token
        }
}
