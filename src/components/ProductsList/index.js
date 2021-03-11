import React from 'react'
import PropTypes from 'prop-types'

import ProductCard from '../ProductCard'

const ProductsList = ({ products }) =>
  products &&
  products.map(product => (
    <ProductCard
      key={product.id}
      product={product}
      /* TODO: Check if user is logged */
      isUserLogged={false}
    />
  ))

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductsList
