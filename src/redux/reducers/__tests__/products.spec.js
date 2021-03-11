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
      const allProducts = [
        {
          id: 1,
          name: 'Máscara de bolinhas vermelha e detalhes em cinza',
          price: 6.5,
          typeOfProduct: 'mask',
          typeOfCut: 'F',
        },
      ]
      const typesOfProduct = [{ typeOfProduct: 'mask', amount: 1 }]

      const action = {
        type: productsActionsTypes.FETCH_ALL_PRODUCTS_SUCCESS,
        payload: { allProducts, typesOfProduct },
      }

      expect(productsReducer(INITIAL_STATE, action)).toEqual({
        ...INITIAL_STATE,
        isLoading: false,
        allProducts,
        typesOfProduct,
      })
    })
  })

  it('should handle SET_CURRENT_FILTERED_PRODUCTS', () => {
    const filteredProducts = [
      {
        id: 1,
        name: 'Máscara de bolinhas vermelha e detalhes em cinza',
        price: 6.5,
        typeOfProduct: 'mask',
        typeOfCut: 'F',
      },
    ]

    const action = {
      type: productsActionsTypes.SET_CURRENT_FILTERED_PRODUCTS,
      payload: filteredProducts,
    }

    expect(productsReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      filteredProducts,
    })
  })

  it('should handle ADD_PRODUCT_TO_CART', () => {
    const newProduct = {
      id: 1,
      name: 'Máscara de bolinhas verde e detalhes em cinza',
      price: 6,
      typeOfProduct: 'mask',
      typeOfCut: 'A',
    }
    const expectedCart = [newProduct]

    const action = {
      type: productsActionsTypes.ADD_PRODUCT_TO_CART,
      payload: newProduct,
    }

    expect(productsReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      cart: expectedCart,
    })
  })

  it('should handle REMOVE_PRODUCT_FROM_CART', () => {
    const productId = 1
    const currentState = {
      ...INITIAL_STATE,
      cart: [
        {
          id: productId,
          name: 'Máscara de bolinhas verde e detalhes em cinza',
          price: 6,
          typeOfProduct: 'mask',
          typeOfCut: 'A',
        },
      ],
    }

    const removeAction = {
      type: productsActionsTypes.REMOVE_PRODUCT_FROM_CART,
      payload: productId,
    }
    const expectedCart = []

    expect(productsReducer(currentState, removeAction)).toEqual({
      ...currentState,
      cart: expectedCart,
    })
  })
})
