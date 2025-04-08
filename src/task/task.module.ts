import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { TaskSchema } from './schemas/task.scheamas';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecretkey } from 'src/constant/constant';
import { CommonModule } from 'src/common/sockets/usuarios/common.module';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    imports:[MongooseModule.forFeature([{name:'Task',schema:TaskSchema}]),JwtModule.register({
        secret: jwtSecretkey.secret,
        signOptions:{expiresIn:'60s'}
    }),CommonModule],
    controllers:[TaskController],
    providers:[TaskService]

})
export class TaskModule {}
