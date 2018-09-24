'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blocks = require('./blocks');

var _blocks2 = _interopRequireDefault(_blocks);

var _reactRedux = require('react-redux');

var _actions = require('../assets/redux/actions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContainer = function (_React$Component) {
	_inherits(MainContainer, _React$Component);

	function MainContainer(p) {
		_classCallCheck(this, MainContainer);

		var _this = _possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).call(this, p));

		_this.changeState = _this.changeState.bind(_this);
		_this.configureNewElement = _this.configureNewElement.bind(_this);
		_this.configureClosedArray = _this.configureClosedArray.bind(_this);
		_this.cancelAdding = _this.cancelAdding.bind(_this);
		_this.makeUpHideBtn = _this.makeUpHideBtn.bind(_this);
		return _this;
	}

	_createClass(MainContainer, [{
		key: 'addArticle',
		value: function addArticle() {
			var data = this.props.titles;
			if (this.props.alreadyClosed.indexOf(this.props.headText) != -1) {
				return;
			}
			if (this.props.headText == this.props.adding) {
				return _react2.default.createElement(
					'div',
					{ className: 'creatingBlock' },
					_react2.default.createElement(
						'table',
						null,
						_react2.default.createElement(
							'tbody',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'label',
										{ htmlFor: '' },
										'Title'
									),
									_react2.default.createElement('input', { ref: 'title', type: 'text' }),
									_react2.default.createElement('br', null)
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'label',
										{ htmlFor: '' },
										'Text'
									),
									_react2.default.createElement('textarea', { ref: 'text', type: 'text' })
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(
										'button',
										{ onClick: this.configureNewElement },
										'Submit'
									),
									_react2.default.createElement(
										'button',
										{ onClick: this.cancelAdding },
										'Cancel'
									)
								)
							)
						)
					)
				);
			} else {
				return _react2.default.createElement(
					'ul',
					{ key: 'ul' },
					this.checkEditing(),
					_react2.default.createElement(
						'li',
						{ key: 'ADD', className: 'addU' },
						_react2.default.createElement(
							'span',
							{ key: 'ADD', className: 'add', onClick: this.changeState },
							'+'
						)
					)
				);
			}
		}
	}, {
		key: 'checkEditing',
		value: function checkEditing() {
			var _this2 = this;

			var data = this.props.titles;
			var exampleArr = {
				title: this.props.editing.title,
				text: this.props.editing.text
			};
			var arr = [];

			data.forEach(function (data, i) {
				// if( JSON.stringify(data) === JSON.stringify(exampleArr) && this.props.headText == this.props.editing.head) { 
				// 		arr.push(<span key='createTitle'><label>Title</label><input type="text"/><br/></span>)
				// 	arr.push(<span key='createText'><label>Text</label><input type="text"/></span>)
				// 	return;	
				// }
				arr.push(_react2.default.createElement(
					'li',
					{ key: i },
					_react2.default.createElement(_blocks2.default, { data: data, title: _this2.props.headText, key: i })
				));
			});

			return arr;
		}
	}, {
		key: 'changeState',
		value: function changeState() {
			this.props.addingElement(this.props.headText);
		}
	}, {
		key: 'configureList',
		value: function configureList(a) {
			if (!this.props.accessToDelete) {
				return;
			}

			this.props.setDeletingValue(a);
			this.props.changeModal(true);
		}
	}, {
		key: 'configureNewElement',
		value: function configureNewElement() {
			if (!this.refs.title.value || !this.refs.text.value) return;

			var data = {
				title: this.props.headText,
				element: {
					title: this.refs.title.value,
					text: this.refs.text.value
				}
			};

			var b = true;
			this.props.articles.filter(function (e) {
				e.articles.forEach(function (s) {
					if (JSON.stringify(s) == JSON.stringify(data.element)) {
						b = false;
					}
				});
			});

			if (!b) return;

			this.props.addElement(data);
			this.refs.title.value = "";
			this.refs.text.value = "";
		}
	}, {
		key: 'makeUpHideBtn',
		value: function makeUpHideBtn() {
			var _this3 = this;

			if (this.props.alreadyClosed.indexOf(this.props.headText) == -1) {
				return _react2.default.createElement(
					'span',
					{ className: 'hideBtn green', onClick: function onClick() {
							_this3.configureClosedArray(true);
						} },
					'\u25B2'
				);
			} else {
				return _react2.default.createElement(
					'span',
					{ className: 'hideBtn red', onClick: function onClick() {
							_this3.configureClosedArray(false);
						} },
					'\u25A2'
				);
			}
		}
	}, {
		key: 'cancelAdding',
		value: function cancelAdding() {
			this.props.addingElement("");
		}
	}, {
		key: 'configureClosedArray',
		value: function configureClosedArray(close) {
			var _this4 = this;

			// let url = "/";
			// let dataFetch = {
			// 	method: 'POST', 
			//     headers: new Headers()
			// }

			// fetch(url, dataFetch) 
			// 	.then((res) => res.json())
			// 	.then((data) => console.log(data))

			if (!close) {
				var arr = this.props.alreadyClosed.filter(function (a) {
					return a != _this4.props.headText;
				});

				this.props.editingCloseElems(arr);
			} else {
				var _arr = this.props.alreadyClosed.concat([this.props.headText]);

				this.props.editingCloseElems(_arr);
			}
		}
	}, {
		key: 'dragstart',
		value: function dragstart(ev, data) {
			ev.dataTransfer.setData("listName", data);
			// let img = new Image();
			// img.src = "images - копия.jpg";
			// ev.dataTransfer.setDragImage(img,10,10);
		}
	}, {
		key: 'dragend',
		value: function dragend(ev) {}
	}, {
		key: 'drop',
		value: function drop(ev, data) {
			ev.preventDefault();
			var changingList = ev.dataTransfer.getData("listName");
			var first = this.props.articles.filter(function (a) {
				return a.title == changingList;
			});
			var second = this.props.articles.filter(function (a) {
				return a.title == data;
			});

			var aa = this.props.articles;

			this.props.articles.map(function (a, y) {
				if (a.title == changingList) {
					aa[y] = second[0];
				} else if (a.title == data) {
					aa[y] = first[0];
				} else {
					aa[y] = a;
				}
			});

			this.props.changePosition(aa);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			return _react2.default.createElement(
				'div',
				{ onDragOver: function onDragOver(e) {
						e.preventDefault();
					}, onDrop: function onDrop(e) {
						_this5.drop(e, _this5.props.headText);
					}, className: 'col' },
				_react2.default.createElement(
					'h1',
					{ draggable: 'true', onDragStart: function onDragStart(e) {
							_this5.dragstart(e, _this5.props.headText);
						}, onDragEnd: function onDragEnd(e) {
							_this5.dragend(e);
						} },
					_react2.default.createElement(
						'span',
						{ className: 'articleTitle', onClick: function onClick() {
								_this5.configureList(_this5.props.headText);
							} },
						this.props.headText
					),
					'\xA0\xA0',
					this.makeUpHideBtn()
				),
				this.addArticle()
			);
		}
	}]);

	return MainContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		accessToDelete: state.accessToDelete,
		modal: state.modalTrue,
		adding: state.adding,
		alreadyClosed: state.closed,
		articles: state.articles,
		editing: state.editingArt
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		setDeletingValue: function setDeletingValue(article) {
			return dispatch((0, _actions.setDeletingValue)(article));
		},
		changeModal: function changeModal(state) {
			return dispatch((0, _actions.changeModal)(state));
		},
		addingElement: function addingElement(state) {
			return dispatch((0, _actions.addingElement)(state));
		},
		addElement: function addElement(data) {
			return dispatch((0, _actions.addElementInArticle)(data));
		},
		editingCloseElems: function editingCloseElems(name) {
			return dispatch((0, _actions.editingCloseElems)(name));
		},
		changePosition: function changePosition(arr) {
			return dispatch((0, _actions.changePosition)(arr));
		}
	};
};

var List = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainContainer);

exports.default = List;