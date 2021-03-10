import React from 'react'
import PropTypes from 'prop-types'

import ProductCard from '../ProductCard'

/* TODO: Use firebase images */
import defaultImage from '../../assets/img/defaultImage.jpg'

const ProductsList = ({ products }) =>
  products &&
  products.map(product => {
    const { id, name, price } = product

    return (
      <ProductCard
        key={id}
        title={name}
        price={price}
        image={defaultImage}
        /* TODO: Check if user is logged */
        isAdminPage={false}
      />
    )
  })

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductsList
