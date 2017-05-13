import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import Nav from '../Header/Nav'

function Footer({ logo }) {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-3'>
            <div className='logo'>
              <Link to='/'>
                <img
                  src={logo}
                  alt='Logo' />
              </Link>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-6'>
            <Nav />
          </div>
          <div className='col-xs-12 col-sm-12 col-md-3'>
            <p className='rights'>&#169;2010-2016 All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.PropTypes = {
  logo: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    logo: state.initialSiteData.logo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
