import React from 'react';
import it from '../scripts/requestAjax.js';

class FunctionBlock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			delete: false,
			save: false
		}
	}

	changeState(a) {
		if(a == "delete") {
			if(this.props.it) {
				this.props.notifyDelete(0);
				FunctionBlock.states.accessToDelete = true;
				return;
			}
		}
		
		this.setState({[a]: !this.state[a]});	
	}

	configureDelete() {

		if(this.state.delete && !this.props.it && !this.state.save) {
			return (<button className="blue" onClick={() => {
					if(this.state.save) {
						FunctionBlock.states.accessToDelete = true;
						this.changeState('save');
						this.changeState('delete');
					}
					FunctionBlock.states.accessToDelete = false;
					this.changeState('delete');				
				}
			}>Return it?</button>)

		} else {
			return (<button className="red" onClick={() => {
					if(this.state.save) {
						FunctionBlock.states.accessToDelete = true;
						this.changeState('save');
						this.changeState('delete');
					}
					FunctionBlock.states.accessToDelete = true;
					this.changeState('delete');	
				}
			}>Delete real tree</button>)
		}
	}

	configureAdd() {
		if(this.state.save) {
			return (<span>
				<button className="blue" onClick={() => {
					if(this.state.delete) {
						FunctionBlock.states.accessToDelete = false;
						this.changeState('save');
						this.changeState('delete');
					}
					this.changeState('save');				
				}}>Return it?</button></span>)

		} else {
			return (<button className="green" onClick={() => {
				if(this.state.delete) {
						FunctionBlock.states.accessToDelete = false;
						this.changeState('save');
						this.changeState('delete');
				}
				this.changeState('save');	
			}}>Create new tree</button>)
		}
	}

	createIt() {
		if(this.state.save) {
			return (<div id="animateArticle">

				<div className="container-fluid">
						<div className="row">
						<div className="col-auto">						
							<h4>Add the new one</h4>
							<label>Name</label>
							<input ref="name" type="text"/>
							<button id="submitAdding" onClick={() => {this.addOneList(this.refs.name.value)}}>Ok</button>
						</div>
						</div>
						</div>
				</div>)
		}
		
	}

	addOneList(val) {
		if(!val) {
			return;
		}
		FunctionBlock.states.val.push(val);
		this.props.notifyAdd();
	}

	render() {

		return (<div id="functionalBlock">
				<div className="container-fluid">
				<div className="row">
				<div className="col-auto">
				{this.configureAdd()}
				{this.configureDelete()}
				</div>
				</div>
				</div>
				{this.createIt()}
				</div>)
	}
}

FunctionBlock.states = {
	val: it.requestIt(),
	accessToDelete: false,
	modalIsTrue: false
} 

export default FunctionBlock;