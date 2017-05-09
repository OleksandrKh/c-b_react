import React from 'react'
import { connect } from 'react-redux'

function Contacts({}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1>Contacts</h1>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Contacts)
