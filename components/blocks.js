'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../assets/redux/actions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoBlock = function (_React$Component) {
	_inherits(InfoBlock, _React$Component);

	function InfoBlock(prop) {
		_classCallCheck(this, InfoBlock);

		var _this = _possibleConstructorReturn(this, (InfoBlock.__proto__ || Object.getPrototypeOf(InfoBlock)).call(this, prop));

		_this.changeIt = _this.changeIt.bind(_this);
		return _this;
	}

	_createClass(InfoBlock, [{
		key: 'changeIt',
		value: function changeIt() {
			var data = {
				head: this.props.title,
				title: this.props.data.title,
				text: this.props.data.text
			};

			this.props.setEditingArticle(data);
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'containers', onDoubleClick: this.changeIt, key: this.props.data.title.toLowerCase() },
				_react2.default.createElement(
					'h4',
					null,
					this.props.data.title
				),
				_react2.default.createElement(
					'h6',
					null,
					this.props.data.text
				)
			);
		}
	}]);

	return InfoBlock;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		setEditingArticle: function setEditingArticle(article) {
			return dispatch((0, _actions.setEditingArticle)(article));
		}
	};
};

var List = (0, _reactRedux.connect)(null, mapDispatchToProps)(InfoBlock);
exports.default = List;