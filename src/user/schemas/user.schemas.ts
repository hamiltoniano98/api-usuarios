import { Schema, Document, Int32 } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  carid:{type:String,require:true},
  admin:{type:Boolean,require:false,default:false}
});

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  carid:string;
  admin:boolean;
}