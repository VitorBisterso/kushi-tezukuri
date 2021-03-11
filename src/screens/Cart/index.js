import React from 'react'
import { useSelector } from 'react-redux'

import EmptyCart from '../../components/EmptyCart'
import CartTable from '../../components/CartTable'

import './styles.css'

const Cart = () => {
  const { cart } = useSelector(state => state.productsReducer)

  const renderCart = () => (
    <div className="cart-container">
      <p>Carrinho</p>
      <div className="cart-tableWrapper">
        <CartTable cart={cart} />
      </div>
    </div>
  )

  return cart.length === 0 ? <EmptyCart /> : renderCart()
}

export default Cart
