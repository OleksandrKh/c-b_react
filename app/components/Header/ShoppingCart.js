import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function showHideSearchBox(e){
  let target = e.target
  let targetClass = target.className
  let dataAttr = target.getAttribute('data-toggle')
  let children = target.children[0]

  if (dataAttr === 'true' && targetClass === 'searchBox') {
    children.setAttribute('style', 'display: block;')
    target.setAttribute('data-toggle', false)
  } else if(dataAttr === 'false' && targetClass === 'searchBox') {
    children.setAttribute('style', 'display: none;')
    target.setAttribute('data-toggle', true)
  } else {
    return false
  }
}

function ShoppingCart({ search, shoppingCartNum, handleSearchChange, handleDecreaseCart }) {
  return (
    <div className='shoppingCart-wrapper'>
      <span>your bag</span>
      <span
        className='shoppingCart'
        onClick={handleDecreaseCart}
      >{shoppingCartNum}</span>
      <div
        className='searchBox'
        onClick={showHideSearchBox}
        data-toggle={true}>
        <input
          className='searchInput'
          onChange={handleSearchChange}/>
      </div>
    </div>
  )
}

ShoppingCart.PropTypes = {
  search: PropTypes.string.isRequired,
  shoppingCartNum: PropTypes.number.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleDecreaseCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    shoppingCartNum: state.shoppingCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchChange: (input) => {
      let search = input.target.value.toLowerCase();
      dispatch({ type: 'SEARCH_DATA', search })
    },
    handleDecreaseCart: () => {
      dispatch({ type: 'DECREASE_SHOPPING_CART' })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)
