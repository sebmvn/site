import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    min-height: 400px;
    padding: ${theme.spacings.small} 0;
    color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
  `}
`

export const Nav = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto ${theme.spacings.small};
    border: 2px solid ${theme.colors.primary};
    border-radius: ${theme.border.radius};
  `}
`

export const NavItem = styled.li`
  ${({ theme }) => css`
    width: 50%;
    padding: ${theme.spacings.xsmall};
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    border-radius: 0;
    font-weight: bold;

    &:first-child() {
      border-bottom-left-radius: ${theme.border.radius};
      border-top-left-radius: ${theme.border.radius};
    }

    &:last-child() {
      border-bottom-right-radius: ${theme.border.radius};
      border-top-right-radius: ${theme.border.radius};
    }

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    &.active {
      background: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    }
  `}
`

export const TabResult = styled.div``
