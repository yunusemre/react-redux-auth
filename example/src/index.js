import 'babel-polyfill'

import './styles/main.css'
import 'rr-auth/build/index.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root'
import { store } from './store/'

export const history = createBrowserHistory();

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()