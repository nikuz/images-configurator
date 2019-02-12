// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import { IntlProvider } from 'react-intl';
import enDictionary from './en.json';
import Home from './home';

import store from './store';

const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <IntlProvider
                locale="en"
                messages={enDictionary}
            >
                <Home />
            </IntlProvider>
        </ReactRedux.Provider>,
        rootEl
    );
}
