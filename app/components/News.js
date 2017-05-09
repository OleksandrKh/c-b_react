import React from 'react'
import { connect } from 'react-redux'

function News({}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1>News</h1>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => ({})
)(News)
