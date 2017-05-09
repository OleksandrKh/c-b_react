import React, { Component } from 'react'
import { connect } from 'react-redux'

function NewsSubscription({ store }) {
  return (
    <div className='newslatters'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>Subscribe</p>
            <p className='subscribe-massage'>Stay updated on news</p>
            <div className='subscription'>
              <input
                type='text'
                placeholder='Your Email Address'
              />
              <button></button>
            </div>
          </div>
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
)(NewsSubscription)
