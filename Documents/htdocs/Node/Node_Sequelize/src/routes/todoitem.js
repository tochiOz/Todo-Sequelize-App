import { Router } from 'express';
import { createTodoItem, updateTodoItem, destroySingleTodoItem } from './../controllers/todoitems';

const router = new Router();

//routes
router.post('/create/:todoId/todoitems', createTodoItem);

//update single todo items
router.patch('/todo/:todoId/todoItem/:todoItemId', updateTodoItem);

//update single todo items
router.delete('/todo/:todoId/todoItem/:todoItemId', destroySingleTodoItem);

export default router;
