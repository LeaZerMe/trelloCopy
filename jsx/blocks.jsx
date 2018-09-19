import React from 'react';

class InfoBlock extends React.Component {
	constructor(props) {
		super(props);
	}
	ok() {
		console.log("Ok");
	}

	render() {

		return (<div className="containers" onDoubleClick={this.ok} key={this.props.data.title.toLowerCase()}>
			<h4>{this.props.data.title}</h4>
			<h6>{this.props.data.text}</h6>
			</div>)
	}
}

export default InfoBlock;