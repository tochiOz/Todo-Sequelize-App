"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TodoItem = require('./../models').TodoItem;

module.exports = {
  createTodoItem: function createTodoItem(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var createdTodoItem;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return TodoItem.create({
                content: req.body.content,
                todoId: req.params.todoId
              });

            case 3:
              createdTodoItem = _context.sent;
              res.status(200).send(createdTodoItem);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(400).send(_context.t0.message));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();
  },
  updateTodoItem: function updateTodoItem(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var isupdateTodoItem, updatedTodoItem;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return TodoItem.findOne({
                where: {
                  id: req.params.todoItemId,
                  todoId: req.params.todoId
                }
              });

            case 3:
              isupdateTodoItem = _context2.sent;

              if (isupdateTodoItem) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", res.status(404).send({
                message: 'TodoItem Not Found!!!!!!!!!!!!'
              }));

            case 8:
              _context2.next = 10;
              return isupdateTodoItem.update({
                content: req.body.content || todo.content,
                complete: req.body.complete || todo.complete
              });

            case 10:
              updatedTodoItem = _context2.sent;
              return _context2.abrupt("return", res.status(200).send({
                message: 'TodoItem Updated Successfully',
                updatedTodoItem: updatedTodoItem
              }));

            case 12:
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(400).send(_context2.t0.message));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }))();
  },
  destroySingleTodoItem: function destroySingleTodoItem(req, res) {
    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var destroyableTodoItem, destroyedTodoItem;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return TodoItem.findOne({
                where: {
                  id: req.params.todoItemId,
                  todoId: req.params.todoId
                }
              });

            case 3:
              destroyableTodoItem = _context3.sent;

              if (destroyableTodoItem) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return", res.status(404).send({
                message: 'Todo Not Found!!!!!!!!!!!!'
              }));

            case 8:
              _context3.next = 10;
              return destroyableTodoItem.destroy();

            case 10:
              destroyedTodoItem = _context3.sent;
              return _context3.abrupt("return", res.status(200).send({
                destroyedTodoItem: destroyedTodoItem,
                message: 'Todo Deleted Succefulyy'
              }));

            case 12:
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(400).send(_context3.t0.message));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }))();
  }
};