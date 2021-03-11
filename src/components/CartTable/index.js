import React from 'react'
import PropTypes from 'prop-types'

import Utils from '../../utils'

import './styles.css'

const getTotalPurchase = cart => {
  const initialValue = 0
  return cart.reduce(
    (accumulator, product) => accumulator + product.amount * product.price,
    initialValue
  )
}

const CartTable = ({ cart }) => {
  const totalPurchase = getTotalPurchase(cart)
  const totalPurchaseString = Utils.convertPriceToBrSyntax(totalPurchase)

  const renderProductsLines = () =>
    cart.map(product => {
      const { id, name, price, amount } = product

      const unitPriceString = Utils.convertPriceToBrSyntax(price)
      const totalPriceString = Utils.convertPriceToBrSyntax(price * amount)

      return (
        <tr key={id}>
          <td>
            <p>{name}</p>
          </td>
          <td>
            <p>{`${amount} un. x ${unitPriceString}`}</p>
          </td>
          <td>
            <p>{totalPriceString}</p>
          </td>
        </tr>
      )
    })

  const renderBottomLine = () => (
    <tr>
      <td colSpan={2}>
        <p>Total</p>
      </td>
      <td colSpan={2}>
        <p>{totalPurchaseString}</p>
      </td>
    </tr>
  )

  return (
    <table className="cartTable-container">
      <tbody>
        {renderProductsLines()}
        {renderBottomLine()}
      </tbody>
    </table>
  )
}

const productShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
}

CartTable.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape(productShape)).isRequired,
}

export default CartTable
