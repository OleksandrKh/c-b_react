import React, { Component } from 'react'
import { connect } from 'react-redux'

function Footer({ store }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          Footer
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    store: 'hello'
  }),
  dispatch => ({})
)(Footer)
