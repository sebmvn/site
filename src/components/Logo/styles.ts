import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideTextOnMobile: () => css`
    ${media.lessThan('medium')`
      width : 5.8rem;
      height: 4.5rem;

      .text {
        display: none;
      }

      svg {
        height: 4.5rem;
        pointer-events: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideTextOnMobile }) => css`
    display: flex;

    align-items: center;

    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideTextOnMobile && wrapperModifiers.hideTextOnMobile}
  `}
`
