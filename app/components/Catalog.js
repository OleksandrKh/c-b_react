import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const numberOfProducts = (num) => {
  return
}

const createProductsList = (list, currentCategory, showNumberOfProducts) => {
  let newList = [];

  if (currentCategory === 'all') {
    let leng;
    (list.length < showNumberOfProducts) ? leng = list.length : leng = showNumberOfProducts;
    for (let i = 0; i < leng; i++) { newList.push(list[i]) }
  } else {
    let leng;
    list = list.filter((item) => { return item.category === currentCategory });
    (list.length < showNumberOfProducts) ? leng = list.length : leng = showNumberOfProducts;
    for (let i = 0; i < leng; i++) { newList.push(list[i]) }
  }

  return newList;
}

const Categories = ({ menu, currentCategory, onClickCategory }) => {
  return (
    <div className='catalog-nav'>
      <ul>
        {menu.map((item) => {
          return (
            <li
              key={item}
              className={item.toLowerCase() === currentCategory ? 'active' : ''}
              onClick={onClickCategory}
            >{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

const CatalogList = ({ list, currentCategory, showNumberOfProducts,
  handleIncreaseCart, handleLoadMore }) => {
    let fullList = list;
  list = createProductsList(list, currentCategory, showNumberOfProducts)
  return (
    <div className='catalog-list'>
      {list.map((product) => {
        return (
          <div
            className='catalog-item col-md-3 col-sm-6 col-xs-12'
            key={`${product.id}_${product.category}`}>
            <figure
              onClick={handleIncreaseCart}>
              {(product.new) ? <p className='new'>New</p> : null}
              <img
                src={product.img}
                alt={product.description} />
              <figcaption>{product.description}</figcaption>
            </figure>
            {product.sale ?
              <p>
                <span className='product-price-sale'>${product.price}</span>
                <span className='product-sale'> ${product.sale}</span>
              </p> : <p>
                <span className='product-price'>${product.price}</span>
              </p>
            }
          </div>
        )
      })}

    {(fullList.length === showNumberOfProducts) ?
      <div className='noMoreProducts'>No more products!</div> : null}
    <div className="col-md-12 col-sm-12 col-xs-12">
      <p
        className='load-more-btn'
        onClick={handleLoadMore.bind(null, showNumberOfProducts, fullList)}
        >Load More...</p>
    </div>
    </div>
  )
}

const Catalog = ({ menu, currentCategory, list, showNumberOfProducts,
  onClickCategory, handleIncreaseCart, handleLoadMore }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1>Catalog</h1>
          <Categories
            currentCategory={currentCategory}
            onClickCategory={onClickCategory}
            menu={menu} />
        </div>
        <CatalogList
          list={list}
          currentCategory={currentCategory}
          handleIncreaseCart={handleIncreaseCart}
          handleLoadMore={handleLoadMore}
          showNumberOfProducts={showNumberOfProducts}
        />
      </div>
    </div>
  )
}

Catalog.PropTypes = {
  menu: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  showNumberOfProducts: PropTypes.number.isRequired,
  onClickCategory: PropTypes.func.isRequired,
  handleIncreaseCart: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired
}

// redux connect
const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.initialSiteData.catalog.menu,
    list: state.initialSiteData.catalog.goods.filter(product => {
      if (state.search === '') {
        return product
      } else {
        return product.description.toLowerCase().includes(state.search)
      }
    }),
    showNumberOfProducts: state.showMoreProducts,
    currentCategory: state.catalogCategory
  }
}

const dispatchStateToProps = (dispatch, ownProps) => {
  return {
    onClickCategory: (e) => {
      let category = e.target.innerHTML.toLowerCase()
      dispatch({ type: 'SET_CATALOG_CATEGORY', category})
    },
    handleIncreaseCart: () => {
      dispatch({ type: 'INCREASE_SHOPPING_CART' })
    },
    handleLoadMore: (showNumberOfProducts, fullList) => {
      let len = fullList.length;
      (len <= showNumberOfProducts) ? showNumberOfProducts = len : showNumberOfProducts += 4;
      dispatch({ type: 'SHOW_MORE_PRODUCTS', showNumberOfProducts })
    }
  }
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(Catalog)
