"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _todo = _interopRequireDefault(require("./routes/todo"));

var _index = _interopRequireDefault(require("./routes/index"));

var _todoitem = _interopRequireDefault(require("./routes/todoitem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//importing routes
var app = (0, _express["default"])(); //middlewares

app.use((0, _morgan["default"])('dev')); //parse incoming request data

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) =>
// 	res.status(200).send({
// 		message: 'You Have An Error, Check it out.'
// 	})
// );
//routes

app.use('/api/v1', [_index["default"], _todo["default"], _todoitem["default"]]);
var _default = app;
exports["default"] = _default;