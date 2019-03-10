// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import enDictionary from './en.json';
import Home from './home';

const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.render(
        <IntlProvider
            locale="en"
            messages={enDictionary}
        >
            <Home />
        </IntlProvider>,
        rootEl
    );
}
