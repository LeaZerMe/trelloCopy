import React from 'react';
import InfoBlock from './blocks.jsx';
import {connect} from "react-redux";
import {changeModal} from '../assets/redux/actions.js';
import {setDeletingValue} from '../assets/redux/actions.js';
import {addingElement} from '../assets/redux/actions.js';
import {addElementInArticle} from '../assets/redux/actions.js';
import {editingCloseElems} from '../assets/redux/actions.js';
import store from '../assets/redux/store.js';

class MainContainer extends React.Component {
	constructor(p) {
		super(p);
		this.changeState = this.changeState.bind(this)
		this.configureNewElement = this.configureNewElement.bind(this)
		this.configureClosedArray = this.configureClosedArray.bind(this)
		this.cancelAdding = this.cancelAdding.bind(this)
		this.makeUpHideBtn = this.makeUpHideBtn.bind(this)
	}

	addArticle() {
			let data = this.props.titles;
			if(this.props.alreadyClosed.indexOf(this.props.headText) != -1) {
				return;
			}
			if(this.props.headText == this.props.adding) {
				return (<div className="creatingBlock">
					<table>
						<tbody>
							<tr>
								<td>
									<label htmlFor="">Title</label><input ref="title" type="text"/><br/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="">Text</label><textarea ref="text" type="text"/>
								</td>
							</tr>
							<tr>				
								<td>
									<button onClick={this.configureNewElement}>Submit</button>
									<button onClick={this.cancelAdding}>Cancel</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>)

			} else {
				return (<ul key="ul">
				{ 
					data.map((data, i) => {
						return <li key={i}><InfoBlock data={data} key={i}/></li>
					})			
				}		
				<li key="ADD"  className="addU"><span key="ADD" className="add" onClick={this.changeState}>+</span></li>	
				</ul>)
			}
	}

	changeState() {
		this.props.addingElement(this.props.headText);
	}

	configureList(a) {
		if(!this.props.accessToDelete) {
			return;
		}

		this.props.setDeletingValue(a);
		this.props.changeModal(true);
	}

	configureNewElement() {
		if(!this.refs.title.value || !this.refs.text.value) return;

		let data = {
			title: this.props.headText,
			element: {
				title: this.refs.title.value,
				text: this.refs.text.value
			}
		}
		this.props.addElement(data)
		this.refs.title.value = "";
		this.refs.text.value = "";
	}

	makeUpHideBtn() {
		if(this.props.alreadyClosed.indexOf(this.props.headText) == -1) {
			return (<span className="hideBtn green" onClick={() => {this.configureClosedArray(true)}}>&#9650;</span>)
		} else {
			return (<span className="hideBtn red" onClick={() => {this.configureClosedArray(false)}}>&#9634;</span>)
		}	
	}

	cancelAdding() {
		this.props.addingElement("");
	}

	configureClosedArray(close) {
		if(!close) {
			let arr = this.props.alreadyClosed.filter((a) => a != this.props.headText);

			this.props.editingCloseElems(arr)
		} else {
			let arr = this.props.alreadyClosed.concat([this.props.headText]);

			this.props.editingCloseElems(arr)		
		}	
	}

	dragstart_handler(ev) {

	}

	render() {

		return (
			<div className="col" droppable="true" onDragStart={this.dragstart_handler}>
			<h1><span draggable="true" className="articleTitle" onClick={() => {this.configureList(this.props.headText)}}>{this.props.headText}</span>&nbsp;&nbsp;{this.makeUpHideBtn()}</h1>
			{this.addArticle()}
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {accessToDelete: state.accessToDelete, modal: state.modalTrue,
	 adding: state.adding, alreadyClosed: state.closed};
};

const mapDispatchToProps = dispatch => {
	return {
		setDeletingValue: (article) => dispatch(setDeletingValue(article)),
		changeModal: (state) => dispatch(changeModal(state)),
		addingElement: (state) => dispatch(addingElement(state)),
		addElement: (data) => dispatch(addElementInArticle(data)),
		editingCloseElems: (name) => dispatch(editingCloseElems(name))
	};
};

const List = connect(mapStateToProps,mapDispatchToProps)(MainContainer);

export default List;