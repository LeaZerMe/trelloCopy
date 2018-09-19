import React from 'react';
import Header from '../jsx/header.jsx';
import FunctionBlock from './functions.jsx';
import LastOfComponents from './mainSpace.jsx';

import "../assets/scss/style.scss"

class ParentOfOthers extends React.Component {

	render() {
		return (<div>
			<Header/>
			<FunctionBlock/>
			<LastOfComponents/>
			</div>)
	}
}

export default ParentOfOthers;