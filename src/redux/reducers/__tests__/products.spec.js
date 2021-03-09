import productsReducer, { INITIAL_STATE } from '../products'
import productsActionsTypes from '../../constants/products'

describe('Products reducer', () => {
  it('should return the initial state', () => {
    expect(productsReducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  describe('Fetch all products', () => {
    it('should handle FETCH_ALL_PRODUCTS_REQUEST', () => {
      const action = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_REQUEST,
      }
      expect(productsReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        isLoading: true,
      })
    })
    it('should handle FETCH_ALL_PRODUCTS_FAILED', () => {
      const action = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_FAILED,
      }
      expect(productsReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        isLoading: false,
        hasError: true,
      })
    })
    it('should handle FETCH_ALL_PRODUCTS_SUCCESS', () => {
      const productsList = [{ name: 'Test name' }]
      const action = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
        payload: productsList,
      }
      expect(productsReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        isLoading: false,
        productsList,
      })
    })
  })
})