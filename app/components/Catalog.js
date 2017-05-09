import React from 'react'
import { connect } from 'react-redux'

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

const CatalogList = ({ list }) => {
  console.log(list);
  return (
    <div className='catalog-list'>
      {list.map((product) => {
        return (
          <div
            className='catalog-item col-md-3 col-sm-6 col-xs-12'
            key={`${product.id}_${product.category}`}>
            <figure>
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
    <p className='load-more-btn'>Load More...</p>
    </div>
  )
}

const Catalog = ({ menu, currentCategory, onClickCategory, list }) => {
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
        <CatalogList list={list} />
      </div>
    </div>
  )
}

export default connect(
  state => ({
    menu: state.initialSiteData.catalog.menu,
    list: state.initialSiteData.catalog.goods,
    currentCategory: state.catalogCategory
  }),
  dispatch => ({
    onClickCategory: (e) => {
      let category = e.target.innerHTML.toLowerCase()
      dispatch({ type: 'SET_CATALOG_CATEGORY', category})
    }
  })
)(Catalog)
