import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColor } from '.'

const wrapperModifies = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};

    ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.large};
    `}
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
`}
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColor) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';

      position: absolute;
      left: 0;
      bottom: -1rem;

      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${!!lineLeft && wrapperModifies.lineLeft(theme, lineColor!)}
    ${!!lineBottom && wrapperModifies.lineBottom(theme, lineColor!)}
    
    ${!!size && wrapperModifies[size](theme)}
  `}
`
