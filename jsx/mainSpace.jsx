import React from 'react';
import MainContainer from './blocksContainer.jsx';
import ModalWindow from './modalWindow.jsx';
import titleList from './functions.jsx';

class LastOfComponents extends React.Component {
	constructor(props) {
		super(props);
		this.changeSomething = this.changeSomething.bind(this);

		this.state = {
			modalVisible: false
		}
	}

	changeSomething(a) {
		this.setState({modalVisible: !this.state.modalVisible})

		if(titleList.states.modalIsTrue) {
			titleList.states.val.splice(titleList.states.val.indexOf(a), 1);
			titleList.states.accessToDelete = false;
		}
	}

	

	render() {
		
		if(titleList.states.modalIsTrue) {
			titleList.states.modalIsTrue = false;
			titleList.states.accessToDelete = false;
			return (
				<div id="mainContainer">
				<div className="container-fluid">
				<div className="row justify-content-center align-items-center">
				{
					titleList.states.val.map((a) => {
						return <MainContainer key={a} headText={a} func={this.changeSomething} states={titleList.states}/>
					})	
				}
		</div>
		</div>
		</div>)
} else if(!titleList.states.modalIsTrue && !this.state.modalVisible){

	return (
		<div id="mainContainer">
		<div className="container-fluid">
		<div className="row justify-content-center align-items-center">
		{
			titleList.states.val.map((a) => {
				return <MainContainer key={a} headText={a} func={this.changeSomething} states={titleList.states}/>
			})	
		}
		</div>
		</div>
		</div>)
} else {
	return (
		<div id="mainContainer">
		<div className="container-fluid">
		<div className="row justify-content-center align-items-center">
		{
			titleList.states.val.map((a) => {
				return <MainContainer key={a} headText={a} func={this.changeSomething} states={titleList.states}/>
			})	
		}
		<ModalWindow func={this.changeSomething} notifyDelete={this.props.notifyDelete}/>
		</div>
		</div>
		</div>)
}

}
}

export default LastOfComponents;