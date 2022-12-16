import styled, { css, DefaultTheme } from 'styled-components'

import { SelectFieldProps } from '.'

type IconPositionProps = Pick<SelectFieldProps, 'iconPosition'>

type WrapperProps = Pick<SelectFieldProps, 'disabled'> & { error?: boolean }

export const Option = styled.option`
  ${({ theme }) => css`
    background: ${theme.colors.inputBg};
  `}
`

export const SelectWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border-color: ${theme.colors.inputBg};

    cursor: pointer;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Select = styled.select<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    flex: 1;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : ''};
    
    -webkit-appearance: button;
    cursor: pointer;

    color: ${theme.colors.text};
    background: ${theme.colors.secondary};
    border: 0;
    outline: 0;
    box-shadow: none;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};



    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.inputBg}
        inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }

    &:focus{
      border: 0;
    }

 

  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.primary};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      height: 100%;
    }

    span {
      padding: 0;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.alert};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${SelectWrapper} {
      border-color: ${theme.colors.alert};
    }

    ${Label} {
      color: ${theme.colors.alert};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Select},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.text}72;

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
