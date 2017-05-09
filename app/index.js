import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import initialSiteData from './data/data.json'

import App from './components/App'
import Home from './components/Home'
import Catalog from './components/Catalog'

require('./styles/bootstrap.min.css')
require('./styles/index.scss')

import reducer from './reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.dispatch({ type: 'GET_JSON_DATA', initialSiteData })

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={ App } >
        <Route path='/' component={ Home } />
        <Route path='/catalog' component={ Catalog } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
