import React from 'react';
import { render } from 'react-dom';

// IMPORT CSS
import css from './styles/style.styl';

// IMPORT COMPONENTS
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// IMPORT REACT ROUTER DEPS
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'

import Raven from 'raven-js';
import { sentry_url } from './data/config'

Raven.config(sentry_url, {
    git_commit: 'aodhioqwfh',
    userLevel: 'editor'
}).install();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
