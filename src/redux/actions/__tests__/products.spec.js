import productsActions from '../products'
import productsActionsTypes from '../../constants/products'

describe('Products actions', () => {
  describe('Fetch all products', () => {
    it('should create an action to fetch all products', () => {
      const expectedAction = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_REQUEST,
      }
      expect(productsActions.fetchAllProductsRequestAction()).toEqual(
        expectedAction
      )
    })
    it('should create an action due to failing while fetching all products', () => {
      const expectedAction = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_FAILED,
      }
      expect(productsActions.fetchAllProductsFailedAction()).toEqual(
        expectedAction
      )
    })
    it('should create an action due to fetching all products successfully', () => {
      const products = [{ name: 'Test name' }]
      const expectedAction = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
        payload: products,
      }
      expect(productsActions.fetchAllProductsSuccessAction(products)).toEqual(
        expectedAction
      )
    })
  })
})
