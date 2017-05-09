import React from 'react'
import { connect } from 'react-redux'

function Sale({}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1>Sale</h1>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Sale)
