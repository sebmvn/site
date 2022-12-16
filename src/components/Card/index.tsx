import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 480px;

    width: 100%;

    background: ${theme.colors.mainBg};
    padding: ${theme.spacings.medium} ${theme.spacings.small};

    border: 1px solid ${theme.colors.inputBg};
    border-radius: ${theme.border.radius};
    box-shadow: 0px 2px 4px ${theme.colors.primary}3F;

    ${media.lessThan('medium')`
      height: auto;
    `}
  `}
`
