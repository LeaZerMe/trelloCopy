import React from 'react';

class Header extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (<div id="header">
			<header>				
			<div className="container-fluid">
			<div className="row justify-content-between align-items-center">
			<div className="col-auto">
			<h3>Trello</h3>
			</div>
			<div className="col-auto">
			<h4>
			Make your life
			</h4>
			</div>
			</div>
			</div></header>
			</div>)
	}	
}

export default Header;