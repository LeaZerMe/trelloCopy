'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _requestAjax = require('../scripts/requestAjax.js');

var _requestAjax2 = _interopRequireDefault(_requestAjax);

var _reactRedux = require('react-redux');

var _actions = require('../assets/redux/actions.js');

var _store = require('../assets/redux/store.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FunctionBlock = function (_React$Component) {
	_inherits(FunctionBlock, _React$Component);

	function FunctionBlock(props) {
		_classCallCheck(this, FunctionBlock);

		var _this = _possibleConstructorReturn(this, (FunctionBlock.__proto__ || Object.getPrototypeOf(FunctionBlock)).call(this, props));

		_this.state = {
			delete: false,
			save: false
		};
		return _this;
	}

	_createClass(FunctionBlock, [{
		key: 'changeState',
		value: function changeState(a) {
			this.setState(_defineProperty({}, a, !this.state[a]));
		}
	}, {
		key: 'configureDelete',
		value: function configureDelete() {
			var _this2 = this;

			if (this.state.delete && !this.state.save) {
				return _react2.default.createElement(
					'button',
					{ className: 'blue', onClick: function onClick() {
							if (_this2.state.save) {
								return;
							}

							_this2.props.setDeleteAccess(false);
							_this2.changeState('delete');
						} },
					'Return it?'
				);
			} else {
				return _react2.default.createElement(
					'button',
					{ className: 'red', onClick: function onClick() {
							if (_this2.state.save) {
								_this2.props.setDeleteAccess(true);
								_this2.changeState('save');
								_this2.changeState('delete');
								return;
							}
							_this2.changeState('delete');
							_this2.props.setDeleteAccess(true);
						} },
					'Delete real tree'
				);
			}
		}
	}, {
		key: 'configureAdd',
		value: function configureAdd() {
			var _this3 = this;

			if (this.state.save) {
				return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'button',
						{ className: 'blue', onClick: function onClick() {
								if (_this3.state.delete) {
									return;
								}
								_this3.changeState('save');
							} },
						'Return it?'
					)
				);
			} else {
				return _react2.default.createElement(
					'button',
					{ className: 'green', onClick: function onClick() {
							if (_this3.state.delete) {

								_this3.changeState('save');
								_this3.changeState('delete');
								_this3.props.setDeleteAccess(false);
								return;
							}
							_this3.changeState('save');
						} },
					'Create new tree'
				);
			}
		}
	}, {
		key: 'createIt',
		value: function createIt() {
			var _this4 = this;

			if (this.state.save) {
				return _react2.default.createElement(
					'div',
					{ id: 'animateArticle' },
					_react2.default.createElement(
						'div',
						{ className: 'container-fluid' },
						_react2.default.createElement(
							'div',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-auto' },
								_react2.default.createElement(
									'h4',
									null,
									'Add the new one'
								),
								_react2.default.createElement(
									'label',
									null,
									'Name'
								),
								_react2.default.createElement('input', { ref: 'name', type: 'text' }),
								_react2.default.createElement(
									'button',
									{ id: 'submitAdding', onClick: function onClick() {
											_this4.addOneList(_this4.refs.name.value);_this4.refs.name.value = "";
										} },
									'Ok'
								)
							)
						)
					)
				);
			}
		}
	}, {
		key: 'addOneList',
		value: function addOneList(val) {
			if (!val) {
				return;
			}

			for (var i = 0; i < this.props.titles.articles.length; i++) {
				if (this.props.titles.articles[i].title == val) {
					return;
				}
			}

			this.props.addArticle(val);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'functionalBlock' },
				_react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-auto' },
							this.configureAdd(),
							this.configureDelete()
						)
					)
				),
				this.createIt()
			);
		}
	}]);

	return FunctionBlock;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	return { titles: state };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		addArticle: function addArticle(article) {
			return dispatch((0, _actions.addArticle)(article));
		},
		setDeleteAccess: function setDeleteAccess(state) {
			return dispatch((0, _actions.setDeleteAccess)(state));
		}
	};
};

var List = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FunctionBlock);

exports.default = List;