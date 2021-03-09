import productActions from '../actions/products'

/* TODO: Remove mocks (import statement and non-sense variables) */
import allProducts from '../mocks/products.json'

const hasError = false
const apiResponseTime = 500

const fetchAllProducts = () => dispatch => {
  dispatch(productActions.fetchAllProductsRequestAction())

  setTimeout(
    () =>
      hasError
        ? dispatch(productActions.fetchAllProductsFailedAction())
        : dispatch(productActions.fetchAllProductsSuccessAction(allProducts)),
    apiResponseTime
  )
}

export default { fetchAllProducts }
