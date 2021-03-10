import Utils from '../index'

describe('ConvertPriceToBrSyntax function', () => {
  const prices = [
    [6, 'R$ 6,00'],
    [5.5, 'R$ 5,50'],
    [10, 'R$ 10,00'],
    [12.5, 'R$ 12,50'],
  ]

  test.each(
    prices
  )(
    'should convert a number to a string with brazillian price syntax',
    (price, expectedString) =>
      expect(Utils.convertPriceToBrSyntax(price)).toBe(expectedString)
  )
})

describe('getTypesOfProduct function', () => {
  it('should get all product types and their correct amount', () => {
    const products = [
      {
        id: 1,
        name: 'Máscara de bolinhas branca',
        price: 8,
        typeOfProduct: 'mask',
        typeOfCut: 'A',
      },
      {
        id: 2,
        name: 'Tapete verde',
        price: 15.5,
        typeOfProduct: 'carpet',
      },
      {
        id: 3,
        name: 'Tapete azul',
        price: 16,
        typeOfProduct: 'carpet',
      },
      {
        id: 4,
        name: 'Jogo americano branco',
        price: 20,
        typeOfProduct: 'plateTowel',
      },
    ]

    const expectedArray = [
      { typeOfProduct: 'mask', amount: 1 },
      { typeOfProduct: 'carpet', amount: 2 },
      { typeOfProduct: 'plateTowel', amount: 1 },
    ]

    expect(expectedArray).toStrictEqual(Utils.getTypesOfProduct(products))
  })
})
