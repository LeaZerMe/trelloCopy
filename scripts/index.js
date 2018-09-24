import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../jsx/allPage';
import {hydrate} from 'react-dom';
import store from '../assets/redux/store.js';
import { Provider } from 'react-redux';

const state = window.__STATE__;
delete window.__STATE__;

const ParentBlock = ({ articles }) => (
    <Provider store={store}>
		<Page/>
	</Provider>
);

hydrate(<ParentBlock/>, document.getElementById('root'));