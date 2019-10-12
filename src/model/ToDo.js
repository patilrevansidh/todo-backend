import mongoose from 'mongoose';
import { schemaOptions } from './Bucket';


const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bucket: {
    type: mongoose.Types.ObjectId,
    ref: 'Bucket',
    required: true
  },
  description: { type: String, required: true },
  isDone: { type: String, required: true, default: false },
  isDone: { type: String, required: true, default: false },
})

export const ToDo = mongoose.model('Todo', todoSchema);

