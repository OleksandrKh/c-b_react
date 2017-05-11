import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import initialSiteData from './components/initialSiteData'
import currency from './components/currency'
import language from './components/language'
import search from './components/search'
import shoppingCart from './components/shoppingCart'
import catalogCategory from './components/catalogCategory'
import { getUserEmail, sendUserEmail } from './components/newsletter'
import products from './components/products'

export default combineReducers({
  routing: routerReducer,
  initialSiteData,
  currency,
  language,
  search,
  shoppingCart,
  catalogCategory,
  getUserEmail,
  sendUserEmail,
  products
})
