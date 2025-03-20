import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schemas';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService:UsersService){}

    //Crear usuario
    @Post()
    async create (@Body()user:User){
        return this.usersService.create(user)
    }

    //Obtener los usuario
    @Get()
    async findAll(){
        return this.usersService.findAll()
    }

    //Obtener los usuario por email
    @Get(':email')
    async findbyEmail(@Param('email') email: string){
        return this.usersService.findforEmail(email)
    }

    //Obtener los usuario por id
    @Get(':id')
    async findbyId(@Param('id') id: string){
        return this.usersService.findforEmail(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User) {
      return this.usersService.update(id, user);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string){
      return this.usersService.delete(id);
    }

}
