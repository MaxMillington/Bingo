import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ConnectedBingo from './components/home/ConnectedBingo'
import App from './components/App';

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => { window.scrollTo(0, 0) }} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ConnectedBingo} />;
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
