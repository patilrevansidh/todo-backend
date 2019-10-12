import { body } from 'express-validator/check';

export const bucketValidation = (method) => {
  switch (method) {
    case 'addBucket': {
      return [
        body('title', 'Bucket Must have title').not().isEmpty(),      
      ];
    };
    default: {
      return []

    }
  }
}