"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _todo = require("./../controllers/todo");

var router = new _express.Router(); //routes

router.post('/create/todo', _todo.createTodo); //get all todo tites

router.get('/todos', _todo.listTodoItems); //retrieving a single todo

router.get('/todo/:todoId', _todo.singleTodoWithContents); //updating a todo list

router.patch('/update/todo/:todoId', _todo.updateSingleTodo); //deleting a todo list

router["delete"]('/delete/todo/:todoId', _todo.destroySingleTodo);
var _default = router;
exports["default"] = _default;