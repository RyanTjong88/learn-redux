import React from 'react';
import { render } from 'react-dom';

// IMPORT CSS
import css from './styles/style.styl';

// IMPORT COMPONENTS
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// IMPORT REACT ROUTER DEPS
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postid" component={Single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));