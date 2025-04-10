import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schemas';
import { UsuariosGateway } from 'src/common/sockets/usuarios/usuarios.gateway';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @Inject(UsuariosGateway) private usuariosGateway: UsuariosGateway,
  ) { }

  //Crear usuario
  async create(user: User) {
    try {
      const newUser = new this.userModel(user);
      this.usuariosGateway.server.emit('mensaje', 'Usuario Creado')
      return newUser.save();
    } catch (error) {
      throw new Error('Error crear usuario');
    }
  }

  //Buscar 
  async findAll() {
    try {
      return this.userModel.find()
    } catch (error) {
      throw new Error('Error al buscar usuarios');
    }
  }

  async findbyid(id: any) {
    try {
      return this.userModel.findById(id)
    } catch (error) {
      throw new Error('Error al buscar usuarios');
    }
  }

  //Buscar por email
  async findforEmail(email: string) {
    try {
      return this.userModel.findOne({ email })
    } catch (error) {
      throw new Error('Error al buscar usuario');
    }
  }

  //Update
  async update(id: string, user: User) {
    try {
      return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
    } catch (error) {
      throw new Error('Error al actualizar');
    }
  }

  //Delete
  async delete(id: string) {
    try {
      return this.userModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Error al eliminar usuario');
    }
  }
}
