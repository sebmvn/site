import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as TextFieldStyles from 'components/TextField/styles'
import * as SelectFieldStyles from 'components/SelectField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const InputGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.small};
    justify-content: space-between;

    ${media.lessThan('medium')`
        flex-direction: column;
    `}
  `}
`

type InputTextFieldProps = {
  hasIcon?: boolean
  hasSelect?: boolean
}
export const InputTextField = styled.div<InputTextFieldProps>`
  ${({ theme, hasIcon = true, hasSelect = false }) => css`
    flex: 1;

    ${TextFieldStyles.InputWrapper} {
      ${hasIcon &&
      css`
        padding-left: 0;
      `}
      ${hasSelect &&
      css`
        padding-right: 0;
      `}
    }

    ${TextFieldStyles.Icon} {
      padding: 0.8rem 1.2rem;
      color: ${theme.colors.primary};
      background: ${theme.colors.secondary};
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};

      & > svg {
        width: 2.5rem;
        height: 100%;
      }
    }

    ${SelectFieldStyles.SelectWrapper} {
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    }
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.small};
    justify-content: flex-end;

    a {
      padding: 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`
