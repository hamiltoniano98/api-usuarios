import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from 'src/auth/dto/create.task.dto';

@Controller('task')
export class TaskController {
    constructor (private readonly taskService:TaskService){}

    @Post('create')
    async createTask(@Body() taskdto:CreateTaskDto) {
        return await this.taskService.create(taskdto);
    }

    @Get()
    async getallTask() {
        return await this.taskService.findAll();
    }

    @Get(':email')
    async getTaskByEmail(@Param('email') email: string) {
        return await this.taskService.findbyemail(email);
    }

    @Get('id')
    async getTaskById(@Param('id') id: string) {
        return await this.taskService.findbyid(id);
    }

    @Put('id')
    async updateTask(@Param('id') id: string, @Body() taskdto:CreateTaskDto){
        return await this.taskService.update(id,taskdto);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        return await this.taskService.delete(id);
    }
}
