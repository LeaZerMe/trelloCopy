import React from 'react';
import InfoBlock from './blocks.jsx';

class MainContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			func: this.props.func
		}
	}

	configureList(a) {

		if(!this.props.states.accessToDelete) {
			return;
		}

		this.state.func(a);
	}

	render() {
		let data = [{ title: "Your goal", text: "Create copy of Trello"},
		{ title: "Vova is cool", text: "Lets do it"}]

		return (
			<div className="col">
			<h1 onClick={() => {this.configureList(this.props.headText)}}>{this.props.headText}</h1>
			<ul>
			{ 
				data.map((data) => {
					return <li><InfoBlock data={data}/></li>
				})			
			}			
			</ul>
			</div>
			)
	}
}

export default MainContainer;