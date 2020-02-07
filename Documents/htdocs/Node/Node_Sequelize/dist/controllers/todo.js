"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Todo = require('./../models').Todo;

var TodoItem = require('./../models').TodoItem;

module.exports = {
  createTodo: function createTodo(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var todoTitle;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Todo.create({
                title: req.body.title
              });

            case 3:
              todoTitle = _context.sent;
              res.status(201).send(todoTitle);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(400).send(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();
  },
  getSingleTodo: function getSingleTodo(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var todoCollection;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Todo.find({});

            case 3:
              todoCollection = _context2.sent;
              return _context2.abrupt("return", res.status(200).send(todoCollection));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(400).send(_context2.t0));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }))();
  },
  listTodoItems: function listTodoItems(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var TodoItems;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Todo.findAll({
                include: [{
                  model: TodoItem,
                  as: 'todoItems'
                }]
              });

            case 3:
              TodoItems = _context3.sent;
              return _context3.abrupt("return", res.status(200).send(TodoItems));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(400).send(_context3.t0.message));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }))();
  },
  singleTodoWithContents: function singleTodoWithContents(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var singleTodo;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return Todo.findOne({
                where: {
                  id: req.params.todoId
                },
                include: [{
                  model: TodoItem,
                  as: 'todoItems'
                }]
              });

            case 3:
              singleTodo = _context4.sent;

              if (singleTodo) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(404).send({
                message: 'Todo Not Found!!!!!!!!!!!!'
              }));

            case 6:
              return _context4.abrupt("return", res.status(200).send(singleTodo));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(400).send(_context4.t0.message));

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }))();
  },
  updateSingleTodo: function updateSingleTodo(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var UpdatedableTodo, updatedTodo;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return Todo.findOne({
                where: {
                  id: req.params.todoId
                },
                include: [{
                  model: TodoItem,
                  as: 'todoItems'
                }]
              });

            case 3:
              UpdatedableTodo = _context5.sent;

              if (UpdatedableTodo) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return", res.status(404).send({
                message: 'Todo Not Found!!!!!!!!!!!!'
              }));

            case 8:
              _context5.next = 10;
              return UpdatedableTodo.update({
                title: req.body.title || todo.title
              });

            case 10:
              updatedTodo = _context5.sent;
              return _context5.abrupt("return", res.status(200).send(updatedTodo));

            case 13:
              _context5.next = 18;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(400).send(_context5.t0.message));

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 15]]);
    }))();
  },
  destroySingleTodo: function destroySingleTodo(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6() {
      var destroyableTdo, destroyedTodo;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return Todo.findOne({
                where: {
                  id: req.params.todoId
                },
                include: [{
                  model: TodoItem,
                  as: 'todoItems'
                }]
              });

            case 3:
              destroyableTdo = _context6.sent;

              if (destroyableTdo) {
                _context6.next = 8;
                break;
              }

              return _context6.abrupt("return", res.status(404).send({
                message: 'Todo Not Found!!!!!!!!!!!!'
              }));

            case 8:
              _context6.next = 10;
              return destroyableTdo.destroy();

            case 10:
              destroyedTodo = _context6.sent;
              return _context6.abrupt("return", res.status(200).send({
                destroyedTodo: destroyedTodo,
                message: 'Todo Deleted Succefulyy'
              }));

            case 12:
              _context6.next = 17;
              break;

            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](0);
              return _context6.abrupt("return", res.status(400).send(_context6.t0.message));

            case 17:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 14]]);
    }))();
  }
};