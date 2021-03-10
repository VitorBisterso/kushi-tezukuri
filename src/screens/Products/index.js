import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductsApi from '../../redux/api/products'

import ProductsList from '../../components/ProductsList'
import TypesOfProduct from '../../components/TypesOfProduct'
import Loading from '../../components/Loading'

import './styles.css'

const Products = () => {
  const dispatch = useDispatch()
  const { products, isLoading } = useSelector(state => state.productsReducer)

  useEffect(() => {
    dispatch(ProductsApi.fetchAllProducts())
  }, [])

  return isLoading ? (
    <div className="products-loading">
      <Loading />
    </div>
  ) : (
    <div className="products-container">
      <TypesOfProduct />
      <div className="products-productsList">
        <ProductsList products={products} />
      </div>
    </div>
  )
}

export default Products
