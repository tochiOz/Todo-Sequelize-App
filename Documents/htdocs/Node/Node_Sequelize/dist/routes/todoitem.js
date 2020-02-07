"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _todoitems = require("./../controllers/todoitems");

var router = new _express.Router(); //routes

router.post('/create/:todoId/todoitems', _todoitems.createTodoItem); //update single todo items

router.patch('/todo/:todoId/todoItem/:todoItemId', _todoitems.updateTodoItem); //update single todo items

router["delete"]('/todo/:todoId/todoItem/:todoItemId', _todoitems.destroySingleTodoItem);
var _default = router;
exports["default"] = _default;