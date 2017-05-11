import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { composeWithDevTools  } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import initialSiteData from './data/data.json'

import App from './components/App'
import Home from './components/Home'
import Catalog from './components/Catalog'
import News from './components/News'
import Sale from './components/Sale'
import About from './components/About'
import Contacts from './components/Contacts'

require('./styles/bootstrap.min.css')
require('./styles/index.scss')

import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
store.dispatch({ type: 'GET_JSON_DATA', initialSiteData })
store.dispatch({ type: 'CREATE_PRODUCTS_STORE', products: initialSiteData.catalog.goods })

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={ App } >
        <Route path='/' component={ Home } />
        <Route path='/catalog' component={ Catalog } />
        <Route path='/news' component={ News } />
        <Route path='/sale' component={ Sale } />
        <Route path='/about' component={ About } />
        <Route path='/contacts' component={ Contacts } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
