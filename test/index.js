// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import Home from './home';

import store from './store';

const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <Home />
        </ReactRedux.Provider>,
        rootEl
    );
}
