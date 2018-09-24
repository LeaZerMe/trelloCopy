import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from 'redux'
import Page from './components/allPage.js';
import store from'./assets/redux/store.js'

module.exports = function render() {

  let content = renderToString(
    <Provider store={store} >
       <Page />
    </Provider>
  );

const preloadedState = store.getState()
return {content, preloadedState};
}