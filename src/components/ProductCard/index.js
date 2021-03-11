import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import ProductCardButton from '../ProductCardButton'

import productActions from '../../redux/actions/products'
import Utils from '../../utils'

import defaultImage from '../../assets/img/defaultImage.jpg'

import './styles.css'

const ProductCard = ({ product, isUserLogged }) => {
  const dispatch = useDispatch()
  const [units, setUnits] = useState(1)

  const handleOnChangeUnit = e => {
    const { value } = e.target

    if (value >= 0 && value <= 99 && value.length <= 2) {
      setUnits(value)
    }
  }

  const handleClickFunction = () => {
    if (isUserLogged) {
      // eslint-disable-next-line no-console
      console.log('edit product')
    } else if (units >= 1) {
      dispatch(productActions.addProductToCart(product, units))
    }
  }

  /* TODO: Use firebase images */
  const image = defaultImage
  const { name, price } = product
  return (
    <motion.div className="productCard-container" layout>
      <img src={image} alt="product" />
      <div className="productCard-content">
        <p className="productCard-title" data-testid="productCard-title">
          {name}
        </p>
        <div className="productCard-bottom">
          <p>{Utils.convertPriceToBrSyntax(price)}</p>
          <div className="productCard-units">
            <p>x</p>
            <input
              type="text"
              pattern="[0-9][0-9]"
              value={units}
              onChange={handleOnChangeUnit}
            />
            <p>un.</p>
          </div>
          <ProductCardButton
            isEditButton={isUserLogged}
            onClick={handleClickFunction}
          />
        </div>
      </div>
    </motion.div>
  )
}

const productShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
}

ProductCard.propTypes = {
  /* TODO: Use firebase images */
  product: PropTypes.shape(productShape).isRequired,
  isUserLogged: PropTypes.bool.isRequired,
}

export default ProductCard
