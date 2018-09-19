import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../jsx/allPage.jsx';
import store from '../assets/redux/store.js';
import { Provider } from 'react-redux';

const ParentBlock = ({ articles }) => (
    <Provider store={store}>
		<Page/>
	</Provider>
);

ReactDOM.render(<ParentBlock/>, document.getElementById('containerForAll'));