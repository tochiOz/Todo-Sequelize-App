"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _todo = _interopRequireDefault(require("./todo"));

var _todoitem = _interopRequireDefault(require("./todoitem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.get('/api/v1', function (req, res) {
    return res.status(200).send({
      status: 'success',
      data: 'Welcome to the Todo Api PostgreSQL and Sequelize App'
    });
  });
  app.get('/', function (req, res) {
    res.status(200).send('Welcome to Node Sequelize App');
  });
  app.use('/api/v1', [_todo["default"], _todoitem["default"]]);
  app.all('/*', function (req, res) {
    return res.status(404).send({
      status: 'error',
      error: 'This route is unavailable on this server'
    });
  });
};

exports["default"] = _default;