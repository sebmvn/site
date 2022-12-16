import { act, renderHook } from '@testing-library/react'
import { useCalc, CalcProviderProps, CalcProvider } from '.'

describe('useCalc', () => {
  const wrapper = ({ children }: CalcProviderProps) => (
    <CalcProvider>{children}</CalcProvider>
  )

  const data = {
    initialValue: 5000,
    monthlyValue: 2000,
    interestRate: { value: 0.01, calendar: 'monthly' },
    period: { value: 12, calendar: 'monthly' }
  }

  it('should save values in the calc', async () => {
    const { result } = renderHook(() => useCalc(), { wrapper })

    act(() => {
      result.current.saveCalc(data)
    })

    expect(result.current.calcValues).toStrictEqual(data)
  })

  it('should calculate compound interest when values in the calc', async () => {
    const { result } = renderHook(() => useCalc(), { wrapper })

    act(() => {
      result.current.saveCalc(data)
    })

    act(() => {
      result.current.calcCompoundInterest()
    })

    expect(result.current.finalTotalValue.toFixed(2)).toStrictEqual('30999.13')
    expect(result.current.totalAmountInvested.toFixed(2)).toStrictEqual(
      '29000.00'
    )
    expect(result.current.totalInInterest.toFixed(2)).toStrictEqual('1999.13')
  })

  it('should return true/false if the calc is clear', async () => {
    const { result } = renderHook(() => useCalc(), { wrapper })

    expect(result.current.isClear).toBe(true)

    act(() => {
      result.current.saveCalc(data)
    })

    expect(result.current.isClear).toBe(false)
  })

  it('should clean values from the calc', async () => {
    const { result } = renderHook(() => useCalc(), { wrapper })

    expect(result.current.isClear).toBe(true)

    act(() => {
      result.current.saveCalc(data)
    })

    expect(result.current.isClear).toBe(false)

    act(() => {
      result.current.clearCalc()
    })

    expect(result.current.isClear).toBe(true)
    expect(result.current.calcValues.initialValue).toBe(0)
  })
})
