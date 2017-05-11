import React, { Component } from 'react'
import { connect } from 'react-redux'

const NewsSubscription = ({ store, onHandleUserEmail, sendEmail }) => {
  // console.log(onHandleUserEmail);
  let currentEmail = ''
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
                onChange={onHandleUserEmail}
              />
              <button
                onClick={sendEmail}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    store: state.newsletter
  }),
  dispatch => ({
    onHandleUserEmail: (e) => {
      let email = e.target.value
      console.log(e);
      if (email === '') { return }
      dispatch({ type: 'GET_USER_EMAIL', email })
    },
    emailBtn: (arr) => {
      console.log(getStore());
    }
  })
)(NewsSubscription)
