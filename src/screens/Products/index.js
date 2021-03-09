import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductsApi from '../../redux/api/products'
import ProductCard from '../../components/ProductCard'

/* TODO: Use firebase images */
import defaultImage from '../../assets/img/defaultImage.jpg'

import './styles.css'

const renderProductsList = productsList =>
  productsList &&
  productsList.map(product => {
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

const Products = () => {
  const dispatch = useDispatch()
  const { productsList, isLoading } = useSelector(
    state => state.productsReducer
  )

  useEffect(() => {
    dispatch(ProductsApi.fetchAllProducts())
  }, [])

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="products-productsList">
      {renderProductsList(productsList)}
    </div>
  )
}

export default Products
