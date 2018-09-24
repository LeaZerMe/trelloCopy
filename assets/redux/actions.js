"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEditingArticle = exports.changePosition = exports.editingCloseElems = exports.addElementInArticle = exports.addingElement = exports.setDeleteAccess = exports.changeModal = exports.setDeletingValue = exports.removeArticle = exports.addArticle = undefined;

var _actionsType = require("./actionsType");

var addArticle = exports.addArticle = function addArticle(name) {
  return { type: _actionsType.ADD_ARTICLE, name: name };
};
var removeArticle = exports.removeArticle = function removeArticle(name) {
  return { type: _actionsType.REMOVE_ARTICLE, name: name };
};
var setDeletingValue = exports.setDeletingValue = function setDeletingValue(name) {
  return { type: _actionsType.SET_DELETING_VALUE, name: name };
};

var changeModal = exports.changeModal = function changeModal(type) {
  return { type: _actionsType.CHANGE_MODAL, state: type };
};
var setDeleteAccess = exports.setDeleteAccess = function setDeleteAccess(type) {
  return { type: _actionsType.SET_DELETE_ACCESS, state: type };
};
var addingElement = exports.addingElement = function addingElement(type) {
  return { type: _actionsType.ADDING_ELEMENT, state: type };
};

var addElementInArticle = exports.addElementInArticle = function addElementInArticle(obj) {
  return { type: _actionsType.ADD_ELEMENT, data: obj };
};
var editingCloseElems = exports.editingCloseElems = function editingCloseElems(arr) {
  return { type: _actionsType.EDIT_CLOSE_ARRAY, arr: arr };
};
var changePosition = exports.changePosition = function changePosition(arr) {
  return { type: _actionsType.CHANGE_ELEMENTS_POSITION, arr: arr };
};

var setEditingArticle = exports.setEditingArticle = function setEditingArticle(info) {
  return { type: _actionsType.SET_EDITING_ARTICLE, data: info };
};