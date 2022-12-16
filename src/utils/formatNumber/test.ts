import { formatPriceNotation, toDecimal, toInteger } from '.'

describe('format-number', () => {
  it('should format number to formatPriceNotation', () => {
    const stringCurrency = formatPriceNotation('1000')
    expect(stringCurrency).toBe('10,00')
  })

  it('should format number toDecimal', () => {
    expect(toDecimal('100,00') / 100).toBe(1.0)
  })

  it('should format number toInteger', () => {
    expect(toInteger('100,00')).toBe(10000)
  })
})
