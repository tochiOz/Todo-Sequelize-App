import { Router } from 'express';
import { createTodoItem, listTodoItems } from './../controllers/todoitems';

const router = new Router();

//routes
router.post('/create/:todoId/todoitems', createTodoItem);

//get all todo tites
// router.get('/todos/todoitems', listTodoItems);

export default router;
