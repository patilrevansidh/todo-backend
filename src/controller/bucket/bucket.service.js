import { Bucket } from "../../model/Bucket";
import mongoose from 'mongoose';

export class BucketService {
  static async addBucket(payload) {
    try {
      const bucket = await Bucket(payload).save()
      return bucket;
    } catch (error) {
      throw error;
    }
  }

  static async getAllBucket() {
    try {
      const buckets = await Bucket.find().exec()
      return buckets;
    } catch (error) {
      throw error;
    }
  }
}