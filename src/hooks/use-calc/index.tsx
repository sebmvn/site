import { createContext, useContext, useState } from 'react'

export type CalendarType = 'monthly' | 'yearly'

export type PeriodCalendarType = {
  value: number
  calendar: CalendarType
}

export type CalcValues = {
  initialValue: number
  monthlyValue: number
  interestRate: PeriodCalendarType
  period: PeriodCalendarType
}

export type AmountMonthly = {
  values: number[]
  interestRates: number[]
}

export type CalcContextData = {
  calcValues: CalcValues
  finalTotalValue: number
  totalAmountInvested: number
  totalInInterest: number
  saveCalc: (calcValues: CalcValues) => void
  convertInterestRate: (interestRate: number, convertTo: CalendarType) => number
  calcCompoundInterest: () => void
  calcAmountMonthly: () => AmountMonthly
  clearCalc: () => void
  isClear: boolean
}

export const CalcContextDefaultValues = {
  calcValues: {
    initialValue: 0.0,
    monthlyValue: 0.0,
    interestRate: { value: 0.0, calendar: 'monthly' as CalendarType },
    period: { value: 0.0, calendar: 'monthly' as CalendarType }
  },
  finalTotalValue: 0.0,
  totalAmountInvested: 0.0,
  totalInInterest: 0,
  saveCalc: () => null,
  convertInterestRate: () => 0.0,
  calcCompoundInterest: () => null,
  calcAmountMonthly: () => ({} as AmountMonthly),
  clearCalc: () => null,
  isClear: true
}

export const CalcContext = createContext<CalcContextData>(
  CalcContextDefaultValues
)

export type CalcProviderProps = {
  children: React.ReactNode
}

const CalcProvider = ({ children }: CalcProviderProps) => {
  const [isClear, setIsClear] = useState(true)

  const [calcValues, setCalcValues] = useState<CalcValues>(
    CalcContextDefaultValues.calcValues
  )

  const [finalTotalValue, setFinalTotalValue] = useState(0.0)
  const [totalAmountInvested, setTotalAmountInvested] = useState(0.0)
  const [totalInInterest, setTotalInInterest] = useState(0.0)

  const saveCalc = (values = calcValues) => {
    setIsClear(false)
    setCalcValues(values)
  }

  const convertInterestRate = (
    interestRate: number,
    convertTo: CalendarType
  ) => {
    const value = {
      monthly: 1 / 12,
      yearly: 12 / 1
    }

    return (Math.pow(1 + interestRate, value[convertTo]) - 1) * 100
  }

  const calcCompoundInterest = () => {
    const { initialValue, interestRate, monthlyValue, period } = calcValues

    const value = {
      monthly: 1,
      yearly: 12
    }
    const convertedPeriod = period.value * value[period.calendar]
    const convertedInterestRate =
      interestRate.calendar === 'yearly'
        ? convertInterestRate(interestRate.value, 'monthly') / 100
        : interestRate.value
    const calcfinalTotalValue = () => {
      if (interestRate.value == 0) {
        return monthlyValue * convertedPeriod + initialValue
      }

      const montlyInterest = Math.pow(
        1 + convertedInterestRate,
        convertedPeriod
      )

      return (
        (monthlyValue * (montlyInterest - 1)) / convertedInterestRate +
        montlyInterest * initialValue
      )
    }

    const finalTotalValue = calcfinalTotalValue()
    const totalAmountInvested = initialValue + monthlyValue * convertedPeriod
    const totalInterest = finalTotalValue - totalAmountInvested

    setFinalTotalValue(finalTotalValue)
    setTotalAmountInvested(totalAmountInvested)
    setTotalInInterest(totalInterest)
  }

  const calcAmountMonthly = (): AmountMonthly => {
    const { initialValue, monthlyValue } = calcValues

    const value = {
      monthly: 1,
      yearly: 12
    }
    const period = calcValues.period.value * value[calcValues.period.calendar]
    const interestRate =
      calcValues.interestRate.calendar === 'yearly'
        ? convertInterestRate(calcValues.interestRate.value, 'monthly') / 100
        : calcValues.interestRate.value

    const amount = {
      values: [initialValue],
      interestRates: [0]
    }

    for (let index = 1; index < period + 1; index++) {
      const value = amount.values[index - 1]
      const rates = amount.interestRates[index - 1]

      amount.values.push(value + monthlyValue)
      amount.interestRates.push((value + rates) * interestRate + rates)
    }

    return amount
  }

  const clearCalc = () => {
    setIsClear(true)
    setCalcValues(CalcContextDefaultValues.calcValues)
  }

  return (
    <CalcContext.Provider
      value={{
        calcValues,
        finalTotalValue,
        totalAmountInvested,
        totalInInterest,
        saveCalc,
        convertInterestRate,
        calcAmountMonthly,
        calcCompoundInterest,
        clearCalc,
        isClear
      }}
    >
      {children}
    </CalcContext.Provider>
  )
}

const useCalc = () => useContext(CalcContext)

export { CalcProvider, useCalc }
