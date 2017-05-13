import React from 'react'
import { connect } from 'react-redux'

function Home({}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1>Home</h1>
          <p>Navigate to the Catalog!</p>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Home)
