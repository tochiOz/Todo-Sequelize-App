import { Router } from 'express';
import {
	createTodo,
	singleTodoWithContents,
	listTodoItems,
	updateSingleTodo,
	destroySingleTodo
} from './../controllers/todo';

const router = new Router();

//routes
router.post('/create/todo', createTodo);

//get all todo tites
router.get('/todos', listTodoItems);

//retrieving a single todo
router.get('/todo/:todoId', singleTodoWithContents);

//updating a todo list
router.patch('/update/todo/:todoId', updateSingleTodo);

//deleting a todo list
router.delete('/delete/todo/:todoId', destroySingleTodo);

export default router;
