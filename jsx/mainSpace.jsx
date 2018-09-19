import React from 'react';
import MainContainer from './blocksContainer.jsx';
import ModalWindow from './modalWindow.jsx';
import titleList from './functions.jsx';
import {connect} from "react-redux";
import {addArticle} from '../assets/redux/actions.js';
import store from '../assets/redux/store.js';

class LastOfComponents extends React.Component {

	render() {
		if(!this.props.titles.modalTrue){

			return (
				<div id="mainContainer">
				<div className="container-fluid">
				<div className="row justify-content-center align-items-center">
				{
					this.props.titles.articles.map((a) => {
						return <MainContainer key={a.title} headText={a.title} titles={a.articles}/>
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
					this.props.titles.articles.map((a) => {
						return <MainContainer key={a.title} headText={a.title} titles={a.articles}/>
					})	
				}
				<ModalWindow key="modalWindow"/>
				</div>
				</div>
				</div>)
		}

	}
}
const mapStateToProps = state => {
	return { titles: state };
};

const List = connect(mapStateToProps)(LastOfComponents);

export default List;