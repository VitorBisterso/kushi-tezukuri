import React from 'react'
import PropTypes from 'prop-types'

import convertPriceToBrSyntax from '../../utils'

import cartIcon from '../../assets/img/cart.svg'
import editIcon from '../../assets/img/edit.svg'

import './styles.css'

const renderButton = isAdminPage => {
  const icon = isAdminPage ? editIcon : cartIcon
  const alt = isAdminPage ? 'editIcon' : 'cartIcon'

  return (
    <button type="button">
      <img src={icon} alt={alt} />
    </button>
  )
}

const ProductCard = ({ title, price, image, isAdminPage }) => (
  <div className="productCard-container">
    <img src={image} alt="product" />
    <div className="productCard-content">
      <p className="productCard-title">{title}</p>
      <div className="productCard-bottom">
        <p>{convertPriceToBrSyntax(price)}</p>
        <div className="productCard-units">
          <p>x</p>
          <input type="number" />
          <p>un.</p>
        </div>
        {renderButton(isAdminPage)}
      </div>
    </div>
  </div>
)

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.node.isRequired,
  isAdminPage: PropTypes.bool.isRequired,
}

export default ProductCard
