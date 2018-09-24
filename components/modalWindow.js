'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../assets/redux/actions.js');

var _store = require('../assets/redux/store.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalWindow = function (_React$Component) {
	_inherits(ModalWindow, _React$Component);

	function ModalWindow(p) {
		_classCallCheck(this, ModalWindow);

		var _this = _possibleConstructorReturn(this, (ModalWindow.__proto__ || Object.getPrototypeOf(ModalWindow)).call(this, p));

		_this.accept = _this.accept.bind(_this);
		_this.reject = _this.reject.bind(_this);
		return _this;
	}

	_createClass(ModalWindow, [{
		key: 'accept',
		value: function accept() {
			this.props.removeArticle(this.props.value);
			this.props.changeModal(false);
		}
	}, {
		key: 'reject',
		value: function reject() {
			this.props.changeModal(false);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'modalWindow' },
				_react2.default.createElement(
					'div',
					{ className: 'col' },
					_react2.default.createElement(
						'p',
						null,
						'Do you want delete this list?'
					),
					_react2.default.createElement(
						'button',
						{ className: 'accept', onClick: this.accept },
						'Accept'
					),
					_react2.default.createElement(
						'button',
						{ className: 'reject', onClick: this.reject },
						'Reject'
					)
				)
			);
		}
	}]);

	return ModalWindow;
}(_react2.default.Component);

var mapStatetoProps = function mapStatetoProps(state) {
	return {
		value: state.deletingValue
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		removeArticle: function removeArticle(article) {
			return dispatch((0, _actions.removeArticle)(article));
		},
		changeModal: function changeModal(article) {
			return dispatch((0, _actions.changeModal)(article));
		}
	};
};

var List = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(ModalWindow);

exports.default = List;