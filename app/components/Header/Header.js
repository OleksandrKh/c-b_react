import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import HelpingHeaderNav from './HelpingHeaderNav'
import Nav from './Nav'
import ShoppingCart from './ShoppingCart'

function Header({ logo }) {
  return (
    <header>
      <div className='container'>
        <div className='row'>
          <HelpingHeaderNav />
        </div>
      </div>
      <div className='navigation-border'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='navigation'>
                <div className='logo'>
                  <Link to='/'>
                    <img
                      src={logo}
                      alt='Logo' />
                  </Link>
                </div>
                <Nav />
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default connect(
  state => ({
    logo: state.initialSiteData.logo
  }),
  dispatch => ({})
)(Header)
