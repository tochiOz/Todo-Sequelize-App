"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inValidInput = exports.inValidName = void 0;

/**
 *
 * @description inValidName is function which validates a name
 *
 * @param {name} name is the eniity you want to validate
 *
 * @param {value} value is the data yur want to validate
 *
 * @returns {boolean} return true or false
 */
var inValidName = function inValidName(name, value) {
  if (!value) return "".concat(name, " is required");
  if (!/^[A-Z][a-z]+\s([A-Z][a-z]+\s)?[A-Z][a-z]+$/.test(value)) return "".concat(name, " is not valid");
  return null;
};

exports.inValidName = inValidName;

var inValidInput = function inValidInput(text) {
  if (!text) return 'Input invalid, field cannot be empty';
  if (!/^.{4,100}$/.test(text)) return 'text should be minimum of 5 characters and maximum of 100';
};

exports.inValidInput = inValidInput;