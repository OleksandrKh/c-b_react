import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

function Nav({ menu }) {
  return (
    <nav className='main-nav'>
      {menu.map((item) => {
        return (<Link
          key={item}
          to={item === 'home' ? '/' : `/${item.toLowerCase()}`}
          className={item === 'sale' ? 'saleNav' : ''}
          activeClassName='active'
        >{item}</Link>)
      })}
    </nav>
  )
}

Nav.PropTypes = {
  menu: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    menu: state.initialSiteData.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
