import * as StyledButton from 'components/Button/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: transparent;
    position: fixed;
    bottom: ${theme.spacings.small};
    right: ${theme.spacings.small};
    z-index: ${theme.layers.alwaysOnTop};

    ${StyledButton.Wrapper} {
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      animation: 2s infinite alternate bounce;
    }

    @keyframes bounce {
      from {
        margin-bottom: 0%;
      }

      to {
        margin-bottom: 5%;
      }
    }
  `}
`
