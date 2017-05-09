import React from 'react'
import { connect } from 'react-redux'

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

function ShoppingCart({ search, shoppingCartNum, handleSearchChange, handleIncreaseCart,
  handleDecreaseCart }) {
  return (
    <div className='shoppingCart-wrapper'>
      <span
        onClick={handleIncreaseCart}
      >your bag</span>
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

export default connect(
  state => ({
    search: state.search,
    shoppingCartNum: state.shoppingCart
  }),
  dispatch => ({
    handleSearchChange: (input) => {
      let search = input.target.value
      dispatch({ type: 'SEARCH_DATA', search })
    },
    handleIncreaseCart: () => {
      dispatch({ type: 'INCREASE_SHOPPING_CART' })
    },
    handleDecreaseCart: () => {
      dispatch({ type: 'DECREASE_SHOPPING_CART' })
    }
  })
)(ShoppingCart)
