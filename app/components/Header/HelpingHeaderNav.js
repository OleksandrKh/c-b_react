import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types';

const NavHelpersList = ({ headerHelpersMenu }) => {
  return (
    <nav className='nav-helpers-list'>
      {headerHelpersMenu.map((item) => {
        return (<Link
          key={item}
          className='nav-helpers-item'
          to={`/${item.toLowerCase()}`}
        >{item}</Link>)
      })}
    </nav>
  )
}

NavHelpersList.PropTypes = {
  headerHelpersMenu: PropTypes.array.isRequired
}


const NavCurrency = ({ headerDropdownCurrency, onCurrencyDropdownChange }) => {
  return (
    <div className='nav-currency-wrapper'>
      <select
        onChange={onCurrencyDropdownChange}
        className='currencyDropdown'>
        {headerDropdownCurrency.map((currency) => {
          return (<option
            key={currency.toLowerCase()}
            value={currency.toLowerCase()}
          >{currency.toUpperCase()}</option>
          )
        })}
      </select>
    </div>
  )
}

NavCurrency.PropTypes = {
  headerDropdownCurrency: PropTypes.string.isRequired,
  onCurrencyDropdownChange: PropTypes.func.isRequired
}

const showLanguageDropdown = (e) => {
  console.log(e.target.parentElement)
}

const NavLanguage = ({ headerDropdownLanguage, onLanguageDropdownChange }) => {
  return (
    <div className='nav-language-wrapper'>
      <select
        onChange={onLanguageDropdownChange}
        data-toggle='false'
        className='languageDropdown'>
        {headerDropdownLanguage.map((language) => {
          return (<option
            key={language.toLowerCase()}
            value={language.toLowerCase()}
          >{language.toUpperCase()}</option>
          )
        })}
      </select>
    </div>
  )
}

NavLanguage.PropTypes = {
  headerDropdownLanguage: PropTypes.string.isRequired,
  onLanguageDropdownChange: PropTypes.func.isRequired
}

const HelpingHeaderNav = ({ store, headerHelpersMenu, headerDropdownCurrency,
  headerDropdownLanguage, onCurrencyDropdownChange, onLanguageDropdownChange }) => {
  return (
    <div className='nav-helpers-header-wrapper'>
      <div className='col-md-3'>
        <NavHelpersList
          headerHelpersMenu = {headerHelpersMenu}/>
      </div>
      <div className='col-md-3 col-md-offset-6'>
        <NavCurrency
          headerDropdownCurrency={headerDropdownCurrency}
          onCurrencyDropdownChange={onCurrencyDropdownChange}/>
        <NavLanguage
          headerDropdownLanguage={headerDropdownLanguage}
          onLanguageDropdownChange={onLanguageDropdownChange}/>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    store: state,
    headerHelpersMenu: state.initialSiteData.header.headerHelpersMenu,
    headerDropdownCurrency: state.initialSiteData.header.headerDropdownCurrency,
    headerDropdownLanguage: state.initialSiteData.header.headerDropdownLanguage
  }),
  dispatch => ({
    onCurrencyDropdownChange: (curr) => {
      console.log(curr.target.value);
      dispatch({
        type: 'TOGGLE_CURRENCY',
        currencyDropdown: curr.target.value
      })
    },
    onLanguageDropdownChange: (lan) => {
      console.log(lan.target.value);
      dispatch({
        type: 'TOGGLE_LANGUAGE',
        languageDropdown: lan.target.value
      })
    }
  })
)(HelpingHeaderNav)
