import express from 'express';
const router = express.Router();
import { validationResult } from 'express-validator/check';
import { todoValidation } from './todo.validation';
import { ERRORS } from '../../common/constants/errors';
import { ToDoService } from './todo.service';

router.get('/', async (req, res) => {
  try {
    const todos = await ToDoService.getAllTodo()
    res.json({ success: true, data: todos });
    return;
  } catch (e) {
    res.json({ message: 'Error In Get Todo' });
  }
});

router.post('/', todoValidation('todoAdd'), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(ERRORS.BAD_REQUEST.CODE).send(errors.array());
    return;
  }
  const { body } = req;
  try {
    const todo = await ToDoService.addToDo(body);
    res.json(todo);
    return;
  } catch (e) {
    res.status(ERRORS.INTERNAL_SERVER.CODE).json({ e });
  }
});

router.put('/:id', todoValidation('todoUpdate'), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(ERRORS.BAD_REQUEST.CODE).send(errors.array());
    return;
  }
  const { body } = req;
  try {
    const todo = await ToDoService.updateTodod(body,req.params.id);
    res.json(todo);
    return;
  } catch (e) {
    res.status(ERRORS.INTERNAL_SERVER.CODE).json({ e });
  }
});

export default router;
