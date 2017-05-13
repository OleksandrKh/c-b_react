import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header/Header'
import NewsSubscription from './NewsSubscription/NewsSubscription'
import Footer from './Footer/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <NewsSubscription />
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
)(App)
