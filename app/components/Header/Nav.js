import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

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

export default connect(
  state => ({
    menu: state.initialSiteData.menu
  }),
  dispatch => ({})
)(Nav)
