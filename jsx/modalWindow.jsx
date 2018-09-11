import React from 'react';
import titleList from './functions.jsx';

class ModalWindow extends React.Component {
	constructor(p) {
		super(p);

		this.state = {
			func: this.props.func
		};

		this.accept = this.accept.bind(this);
		this.reject = this.reject.bind(this);
	}

	accept() {
		titleList.states.modalIsTrue = true;
		this.state.func(0);
		this.props.notifyDelete(1);
	}

	reject() {
		this.state.func(1);
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

export default ModalWindow;