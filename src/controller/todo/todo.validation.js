import { body } from 'express-validator/check';

export const todoValidation = (method) => {
  switch (method) {
    case 'todoAdd': {
      return [
        body('title', 'Todo Must have title').not().isEmpty(),
        body('description', 'Todo Must have description').not().isEmpty(),
        body('bucket', 'Todo Must have bucket').not().isEmpty(),
      ];
    };
    case 'todoUpdate':{
      return [
        body('title', 'Todo Must have title').optional().not().isEmpty(),
        body('description', 'Todo Must have description').optional().not().isEmpty(),
        body('bucket', 'Todo Must have bucket').optional().not().isEmpty(),
      ];
    }
    default: {
      return []
    }
  }
}