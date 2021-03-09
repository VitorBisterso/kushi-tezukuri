import convertPriceToBrSyntax from '../index'

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
      expect(convertPriceToBrSyntax(price)).toBe(expectedString)
  )
})
