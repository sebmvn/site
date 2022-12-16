import { useEffect, useState } from 'react'

import { FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

import { Percent as PercentIcon } from '@styled-icons/feather/Percent'
import { Calendar as CalendarIcon } from '@styled-icons/feather/Calendar'

import {
  formatIntegerNotation,
  formatPriceNotation,
  toDecimal,
  toInteger
} from 'utils/formatNumber'

import { CalendarType, useCalc } from 'hooks/use-calc'
import {
  FieldErrors,
  compoundInterestCalculatorValidate
} from 'utils/validations'
import SelectField from 'components/SelectField'

const FormCalculator = () => {
  const {
    isClear,
    calcValues,
    saveCalc,
    calcCompoundInterest,
    clearCalc,
    convertInterestRate
  } = useCalc()

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState({
    initialValue: '',
    monthlyValue: '',
    interestRate: '',
    period: '',
    interestRateCalendar: 'monthly' as CalendarType,
    periodCalendar: 'monthly' as CalendarType
  })

  useEffect(() => {
    if (!isClear) {
      setValues({
        initialValue: formatPriceNotation(calcValues.initialValue.toFixed(2)),
        monthlyValue: formatPriceNotation(calcValues.monthlyValue.toFixed(2)),
        interestRate: formatPriceNotation(
          (calcValues.interestRate.value * 100).toFixed(2)
        ),
        interestRateCalendar: values.interestRateCalendar,
        period: formatIntegerNotation(calcValues.period.value.toString()),
        periodCalendar: values.periodCalendar
      })
    }
  }, [isClear, calcValues, values.interestRateCalendar, values.periodCalendar])

  const handleInput = (field: string, value: string) => {
    clearCalc()
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleConvertInterestRate = (field: string, value: string) => {
    const interestRate = toDecimal(values.interestRate) / 100
    const convertInterestRateValue = convertInterestRate(
      interestRate,
      value as CalendarType
    )

    handleInput(
      'interestRate',
      formatPriceNotation(convertInterestRateValue.toFixed(2))
    )
    handleInput(`${field}Calendar`, value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = compoundInterestCalculatorValidate(values)

    if (Object.keys(errors).length) {
      console.log(errors)
      setFieldError(errors)
      return
    }
    setFieldError({})

    const initialValue = toDecimal(values.initialValue)
    const monthlyValue = toDecimal(values.monthlyValue)
    const interestRate = {
      value: toDecimal(values.interestRate) / 100,
      calendar: values.interestRateCalendar
    }
    const period = {
      value: toInteger(values.period),
      calendar: values.periodCalendar
    }

    saveCalc({
      initialValue,
      monthlyValue,
      interestRate,
      period
    })

    calcCompoundInterest()
  }

  const handleCleanForm = () => {
    setValues({
      initialValue: '',
      monthlyValue: '',
      interestRate: '',
      interestRateCalendar: 'monthly',
      period: '',
      periodCalendar: 'monthly'
    })
    clearCalc()
    setFieldError({})
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <S.InputGroup>
          <S.InputTextField hasIcon>
            <TextField
              label="Valor Inicial"
              name="initialValue"
              value={values.initialValue}
              maxLength={16}
              min={0}
              error={fieldError?.initialValue}
              placeholder="0,00"
              onInputChange={(value: string) =>
                handleInput('initialValue', formatPriceNotation(value))
              }
              icon={<span>R$</span>}
              data-testid="initialValue"
            />
          </S.InputTextField>

          <S.InputTextField hasIcon>
            <TextField
              label="Valor Mensal"
              name="monthlyValue"
              value={values.monthlyValue}
              maxLength={16}
              error={fieldError?.monthlyValue}
              placeholder="0,00"
              onInputChange={(value) =>
                handleInput('monthlyValue', formatPriceNotation(value))
              }
              icon={<span>R$</span>}
              data-testid="monthlyValue"
            />
          </S.InputTextField>
        </S.InputGroup>

        <S.InputGroup>
          <S.InputTextField hasIcon hasSelect>
            <TextField
              label="Taxa de Juros"
              name="interestRate"
              value={values.interestRate}
              maxLength={7}
              error={fieldError?.interestRate}
              placeholder="0,00"
              onInputChange={(value) =>
                handleInput('interestRate', formatPriceNotation(value))
              }
              icon={<PercentIcon />}
              select={
                <SelectField
                  value={values.interestRateCalendar}
                  options={[
                    {
                      value: 'yearly',
                      label: 'Anual'
                    },
                    {
                      value: 'monthly',
                      label: 'Mensal'
                    }
                  ]}
                  onInputChange={(value: string) =>
                    handleConvertInterestRate('interestRate', value)
                  }
                />
              }
              data-testid="interestRate"
            />
          </S.InputTextField>

          <S.InputTextField hasIcon hasSelect>
            <TextField
              label="Período"
              name="period"
              value={values.period}
              error={fieldError?.period}
              placeholder="0"
              onInputChange={(value) =>
                handleInput('period', formatIntegerNotation(value))
              }
              icon={<CalendarIcon />}
              select={
                <SelectField
                  value={values.periodCalendar}
                  options={[
                    {
                      value: 'yearly',
                      label: 'Anual'
                    },
                    {
                      value: 'monthly',
                      label: 'Mensal'
                    }
                  ]}
                  onInputChange={(value: string) =>
                    handleInput('periodCalendar', value)
                  }
                />
              }
              data-testid="period"
            />
          </S.InputTextField>
        </S.InputGroup>

        <S.ButtonGroup>
          <Button type="submit" size="medium" data-testid="handleSubmit">
            <span>Calcular</span>
          </Button>

          <Button
            as="a"
            background="transparent"
            onClick={handleCleanForm}
            data-testid="handleCleanForm"
          >
            <span>Limpar</span>
          </Button>
        </S.ButtonGroup>
      </form>
    </FormWrapper>
  )
}

export default FormCalculator
