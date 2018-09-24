"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionsType = require("./actionsType");

var _actionsType2 = require("./actionsType.js");

var _defaultState = require("./defaultState");

var rootReducer = function rootReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState.initialState;
	var action = arguments[1];

	switch (action.type) {
		case _actionsType.ADD_ARTICLE:

			return _extends({}, state, {
				articles: state.articles.concat([{ title: action.name, articles: [{ title: "Now is nothing" }] }])
			});
		case _actionsType.REMOVE_ARTICLE:

			var editedArr = state.articles.filter(function (a) {
				return a.title != action.name;
			});
			return _extends({}, state, { articles: editedArr });
		case _actionsType.CHANGE_MODAL:

			return _extends({}, state, {
				modalTrue: action.state
			});
		case _actionsType.SET_DELETING_VALUE:

			return _extends({}, state, {
				deletingValue: action.name
			});
		case _actionsType.SET_DELETE_ACCESS:

			return _extends({}, state, {
				accessToDelete: action.state
			});
		case _actionsType.ADDING_ELEMENT:

			return _extends({}, state, {
				adding: action.state
			});
		case _actionsType.ADD_ELEMENT:

			var array = state.articles;
			array.map(function (a) {
				if (a.articles[0].title == "Now is nothing") {
					a.articles[0] = action.data.element;
				} else if (a.title == action.data.title) {
					a.articles.push(action.data.element);
				}
			});

			return _extends({}, state, {
				articles: array
			});
		case _actionsType.EDIT_CLOSE_ARRAY:

			return _extends({}, state, {
				closed: action.arr
			});
		case _actionsType2.CHANGE_ELEMENTS_POSITION:

			return _extends({}, state, {
				articles: action.arr
			});
		case _actionsType.SET_EDITING_ARTICLE:

			return _extends({}, state, {
				editingArt: action.data
			});
		default:
			return state;
	}
};

exports.default = rootReducer;