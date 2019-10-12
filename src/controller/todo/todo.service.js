import { Bucket } from "../../model/Bucket";
import { ToDo } from "../../model/ToDo";
import mongoose from 'mongoose';

const todoDTOPopuldation = [
  { path: 'bucket', select: '_id title' }
]
export class ToDoService {
  static async addToDo(payload) {
    try {
      const toDo = await ToDo(payload).save()
      return toDo;
    } catch (error) {
      throw error;
    }
  }

  static async getAllTodo(payload) {
    try {
      const toDo = await ToDo.find().populate(todoDTOPopuldation).exec()
      return toDo;
    } catch (error) {
      throw error;
    }
  }

  static async updateTodod(payload, id) {
    try {
      const toDo = await ToDo.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(id) },
        payload,
        { new: true }
      ).populate(todoDTOPopuldation).exec()
      return toDo;
    } catch (error) {
      throw error;
    }
  }
}