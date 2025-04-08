import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schemas';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('users')
export class UsersController {
    constructor (private readonly usersService:UsersService){}

    //Obtener los usuario
    @Get()
    async findAll(){
        return this.usersService.findAll()
    }

    //Obtener los usuario por id
    @Get(':id')
    @UseGuards(AuthGuard)
    async findbyId(@Param('id') id: string){
        return this.usersService.findbyid(id)
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async update(@Param('id') id: string, @Body() user: User) {
      return this.usersService.update(id, user);
    }
  
    @Delete(':id')
    @UseGuards(AuthGuard)
    async delete(@Param('id') id: string){
      return this.usersService.delete(id);
    }

}
