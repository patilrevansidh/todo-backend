import mongoose from 'mongoose';

export const schemaOptions = {
  timestamps: true
};

const bucketSchema = new mongoose.Schema({
  title: { type: String, required: true }
}, schemaOptions)

export const Bucket = mongoose.model('Bucket', bucketSchema);

