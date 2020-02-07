"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = new _express.Router(); //welcome message;

router.get('/', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the Todo Api PostgreSQL and Sequelize App'
  });
});
var _default = router;
exports["default"] = _default;