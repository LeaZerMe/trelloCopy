import React from 'react';
import it from '../scripts/requestAjax.js';
import {connect} from "react-redux";
import {addArticle} from '../assets/redux/actions.js';
import {setDeleteAccess} from '../assets/redux/actions.js';
import {removeArticle} from '../assets/redux/actions.js';
import store from '../assets/redux/store.js';

class FunctionBlock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			delete: false,
			save: false
		}
	}

	changeState(a) {
		this.setState({[a]: !this.state[a]});	
	}

	configureDelete() {
		if(this.state.delete && !this.state.save) {
			return (<button className="blue" onClick={() => {
					if(this.state.save) {
						return;
					}

					this.props.setDeleteAccess(false);
					this.changeState('delete');				
				}
			}>Return it?</button>)

		} else {
			return (<button className="red" onClick={() => {
					if(this.state.save) {
						this.props.setDeleteAccess(true);
						this.changeState('save');
						this.changeState('delete');
						return;
					}
					this.changeState('delete');	
					this.props.setDeleteAccess(true);
				}
			}>Delete real tree</button>)
		}
	}

	configureAdd() {
		if(this.state.save) {
			return (<span>
				<button className="blue" onClick={() => {
					if(this.state.delete) {
						return;
					}
					this.changeState('save');				
				}}>Return it?</button></span>)

		} else {
			return (<button className="green" onClick={() => {
				if(this.state.delete) {

						this.changeState('save');
						this.changeState('delete');
						this.props.setDeleteAccess(false);
						return;
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
							<button id="submitAdding" onClick={() => {this.addOneList(this.refs.name.value); this.refs.name.value = ""}}>Ok</button>
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

		for(let i = 0; i < this.props.titles.articles.length; i++) {
			if(this.props.titles.articles[i].title == val) {
				return;
			}
		}

		this.props.addArticle(val)
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

const mapStateToProps = state => {
  return { titles: state };
};
const mapDispatchToProps = dispatch => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
    setDeleteAccess: (state) => dispatch(setDeleteAccess(state))
  };
};

const List = connect(mapStateToProps,mapDispatchToProps)(FunctionBlock);

export default List;