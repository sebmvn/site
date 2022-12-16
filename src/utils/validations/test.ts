import { compoundInterestCalculatorValidate } from '.'

describe('compoundInterestCalculatorValidate()', () => {
  it('should validate empty fields', () => {
    const fields = {
      initialValue: '',
      monthlyValue: '',
      interestRate: '',
      period: ''
    }

    expect(compoundInterestCalculatorValidate(fields)).toMatchObject({
      initialValue: 'Campo obrigatório',
      monthlyValue: 'Campo obrigatório',
      interestRate: 'Campo obrigatório',
      period: 'Campo obrigatório'
    })
  })

  it('should return error when non numeric values are passed in currency fields', () => {
    const fields = {
      initialValue: 'abc',
      monthlyValue: 'abc',
      interestRate: 'abc',
      period: 'abc'
    }
    expect(
      compoundInterestCalculatorValidate(fields).initialValue
    ).toMatchInlineSnapshot(`undefined`)
  })
})
