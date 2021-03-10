import React from 'react'
import { useSelector } from 'react-redux'

import './styles.css'

const TypesOfProduct = () => {
  const { typesOfProduct } = useSelector(state => state.productsReducer)

  return (
    <div className="typesOfProduct-container">
      <p>Tipos de produto</p>
      <div className="typesOfProduct-filters">
        {typesOfProduct.map(type => (
          <p>
            {type.typeOfProduct} ({type.amount})
          </p>
        ))}
      </div>
    </div>
  )
}

export default TypesOfProduct
