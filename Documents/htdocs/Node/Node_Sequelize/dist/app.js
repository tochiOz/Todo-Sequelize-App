"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _projects = _interopRequireDefault(require("./routes/projects"));

var _task = _interopRequireDefault(require("./routes/task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//importing routes
var app = (0, _express["default"])(); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use(json()); //routes

app.use(_projects["default"]);
app.use(_task["default"]);
var _default = app;
exports["default"] = _default;