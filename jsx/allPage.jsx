import React from 'react';
import Header from '../jsx/header.jsx';
import FunctionBlock from './functions.jsx';
import LastOfComponents from './mainSpace.jsx';

import "../css/style.scss";

class ParentOfOthers extends React.Component {
	constructor(p) {
		super(p);
		this.notifyAboutDelete = this.notifyAboutDelete.bind(this);
		this.notifyAboutAdd = this.notifyAboutAdd.bind(this);

		this.state = {
			deleted: false,
			addingAdd: false
		}
	}

	notifyAboutDelete(a) {
		if(a) {
			this.setState({deleted: true})
		} else {
			this.setState({deleted: false})
		}	
	}

	notifyAboutAdd() {
		this.setState({addingAdd: !this.state.addingAdd})
	}

	render() {
		return (<div>
			<Header/>
			<FunctionBlock it={this.state.deleted} notifyDelete={this.notifyAboutDelete} notifyAdd={this.notifyAboutAdd}/>
			<LastOfComponents notifyDelete={this.notifyAboutDelete}/>
			</div>)
	}
}

export default ParentOfOthers