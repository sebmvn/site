import { useState, SelectHTMLAttributes } from 'react'

import * as S from './styles'

export type OptionType = {
  value: string
  label: string
}

export type SelectFieldProps = {
  options: OptionType[]
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectField = ({
  options,
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  ...props
}: SelectFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.SelectWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Select
          onChange={onChange}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          value={value}
          {...(label ? { id: name } : {})}
          {...props}
        >
          {options.map(({ value, label }, index) => (
            <S.Option key={index} value={value}>
              {label}
            </S.Option>
          ))}
        </S.Select>
      </S.SelectWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default SelectField
