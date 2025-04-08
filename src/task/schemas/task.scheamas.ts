import { Schema, Document, Int32 } from 'mongoose';

export const TaskSchema = new Schema({
  name: { type: String, required: true },
  description:{type:String,require:true},
  usermail:{type:String,require:true},
  completed:{type:Boolean,require:false,default:false}
});

export interface Task extends Document {
  name: string;
  description:string;
  usermail:string;
  completed:boolean;
}