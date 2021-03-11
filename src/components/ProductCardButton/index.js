import React from 'react'
import PropTypes from 'prop-types'

import cartIcon from '../../assets/img/cart.svg'
import editIcon from '../../assets/img/edit.svg'

import './styles.css'

const ProductCardButton = ({ isEditButton, onClick }) => {
  let icon
  let alt
  if (isEditButton) {
    icon = editIcon
    alt = 'edit-icon'
  } else {
    icon = cartIcon
    alt = 'cart-icon'
  }

  return (
    <button
      className="productCardButton-container"
      type="button"
      onClick={onClick}
    >
      <img src={icon} alt={alt} />
    </button>
  )
}

ProductCardButton.propTypes = {
  isEditButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ProductCardButton
