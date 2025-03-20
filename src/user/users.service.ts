import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schemas';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel:Model<User>){}
    
    //Crear usuario
    async create(user:User){
        const newUser=new this.userModel(user);
        return newUser.save();
    }

    //Buscar 
    async findAll(){
        return this.userModel.find()
    }

    //Buscar por email
    async findforEmail(email:string){
        return this.userModel.findOne({email})
    }

    //Update
    async update(id: string, user: User){
        return this.userModel.findByIdAndUpdate(id, user, { new: true });
      }
    
    //Delete
      async delete(id: string){
        return this.userModel.findByIdAndDelete(id);
      }
}
