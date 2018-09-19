import React from 'react';
import titleList from './functions.jsx';
import {connect} from "react-redux";
import {removeArticle} from '../assets/redux/actions.js';
import {changeModal} from '../assets/redux/actions.js';
import store from '../assets/redux/store.js';

class ModalWindow extends React.Component {
	constructor(p) {
		super(p);

		this.accept = this.accept.bind(this);
		this.reject = this.reject.bind(this);
	}

	accept() {
		this.props.removeArticle(this.props.value);
		this.props.changeModal(false);
	}

	reject() {
		this.props.changeModal(false);
	}

	render() {
		return (<div id="modalWindow">
			<div className="col">
			<p>Do you want delete this list?</p>
			<button className="accept" onClick={this.accept}>Accept</button>
			<button className="reject" onClick={this.reject}>Reject</button>
			</div>
			</div>);
	}
}
const mapStatetoProps = state => {
 	return {
 	 	value: state.deletingValue
	} 
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: (article) => dispatch(removeArticle(article)),
    changeModal: (article) => dispatch(changeModal(article))
  };
};

const List = connect(mapStatetoProps,mapDispatchToProps)(ModalWindow);

export default List;