import React from 'react'

import emptyCartImage from '../../assets/img/emptyCart.svg'

import './styles.css'

const EmptyCart = () => (
  <div className="emptyCart-container">
    <img src={emptyCartImage} alt="empty-cart" />
    <p>Seu carrinho está vazio...</p>
  </div>
)

export default EmptyCart
