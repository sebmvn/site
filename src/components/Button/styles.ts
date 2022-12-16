import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'background'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      stroke-width: 0.3rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  solid: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.secondaryText};
  `,

  transparent: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.primary};

    &:hover {
      background: transparent;
      color: rgba(10, 127, 246, 0.75);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, background }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    color: ${theme.colors.assets};
    font-weight: ${theme.font.black};
    font-family: ${theme.font.family};

    &:hover {
      background: rgba(10, 127, 246, 0.75);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!background && wrapperModifiers[background](theme)}
  `}
`
