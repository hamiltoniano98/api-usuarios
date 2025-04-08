import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.scheamas';
import { CreateTaskDto } from 'src/auth/dto/create.task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel('Task') private taskModel: Model<Task>
    ) { }
    async create(task) {
        try {
            return new this.taskModel(task).save();
        } catch (error) {

        }
    }

    async findAll() {
        try {
            return this.taskModel.find()
        } catch (error) {
            throw new Error('No se encontraron tarea')
        }
    }

    async findbyid(id: string) {
        try {
            return this.taskModel.findById({ id })
        } catch (error) {

        }
    }

    async findbyemail(email: string) {
        try {
            return this.taskModel.find({ email })
        } catch (error) {

        }
    }

    async update(id: string, taskdto: CreateTaskDto) {
        try {
            return this.taskModel.findByIdAndUpdate(id,taskdto, { new: true })
        } catch (error) {

        }
    }

    async delete(id: string) {
        try {
            return this.taskModel.findByIdAndDelete(id)
        } catch (error) {

        }
    }
}
