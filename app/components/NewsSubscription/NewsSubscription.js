import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const handleUserEmail = (sendEmail) => {
  let input = document.getElementById('newslettersEmail');
  let inputVal = input.value;
  if (inputVal === '') { return }
  sendEmail(inputVal)
  input.value = '';
}

const NewsSubscription = ({ sendEmail }) => {
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
                id='newslettersEmail'
              />
              <button
                onClick={handleUserEmail.bind(null, sendEmail)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

NewsSubscription.PropTypes = {
  sendEmail: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    store: state.newsletter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emailBtn: (arr) => {
      console.log(getStore());
    },
    sendEmail: (email) => {
      dispatch({ type: 'SEND_USER_EMAIL', email })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsSubscription)
