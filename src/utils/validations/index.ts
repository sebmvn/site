import { CalendarType } from 'hooks/use-calc'
import Joi from 'joi'

const fieldsValidations = {
  initialValue: Joi.string().required().messages({
    'any.required': 'Campo obrigatório',
    'string.empty': 'Campo obrigatório',
    'string.min': 'tamanho minimo de 1 digito',
    'string.base': 'o tipo do dado precisa ser textual'
  }),
  monthlyValue: Joi.string().required().messages({
    'any.required': 'Campo obrigatório',
    'string.empty': 'Campo obrigatório',
    'string.min': 'tamanho minimo de 1 digito',
    'string.base': 'o tipo do dado precisa ser textual'
  }),

  interestRate: Joi.string().required().messages({
    'any.required': 'Campo obrigatório',
    'string.empty': 'Campo obrigatório',
    'string.min': 'tamanho minimo de 1 digito',
    'string.base': 'o tipo do dado precisa ser textual'
  }),
  period: Joi.string().required().messages({
    'any.required': 'Campo obrigatório',
    'string.empty': 'Campo obrigatório',
    'string.min': 'tamanho minimo de 1 digito',
    'string.base': 'o tipo do dado precisa ser textual'
  }),
  interestRateCalendar: Joi.string().valid('monthly', 'yearly').required(),
  periodCalendar: Joi.string().valid('monthly', 'yearly').required()
}

export type FieldErrors = {
  [key: string]: string
}

const getFieldErrors = (objError: Joi.ValidationResult) => {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type compoundInterestCalculatorFields = {
  initialValue: string
  monthlyValue: string
  interestRate: string
  period: string
  interestRateCalendar: CalendarType
  periodCalendar: CalendarType
}
export const compoundInterestCalculatorValidate = (
  values: compoundInterestCalculatorFields
) => {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
