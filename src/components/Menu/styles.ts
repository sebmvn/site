import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
  `}
`

export const NavBelt = styled.menu`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.small} 0;

    width: 100%;
    position: relative;
  `}
`

export const NavMain = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    position: relative;

    ${Container} {
      display: flex;
      align-items: center;
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.menuText};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    stroke-width: 0.3rem;
  `}
`

export const PipeIconWrapper = styled.div`
  ${({ theme }) => css`
    border: 0.3rem solid ${theme.colors.menuText};
    height: 2.4rem;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};

    ${MenuLink} {
      margin: 0.3rem ${theme.spacings.small};
      white-space: nowrap;
    }

    ${media.lessThan('medium')`
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;

      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;


      > :first-of-type{
        margin-left: 0;
      }

      > :last-child {
        margin-right: 0;
      }
    `}

    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.menuText};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    width: 100%;

    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;

    transition: opacity 0.3s ease-in-out;

    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};

      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      stroke-width: 0.3rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
      overflow: hidden;
    }

    ${MenuLink} {
      color: ${theme.colors.menuText};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};

      margin: 0.3rem ${theme.spacings.small} ${theme.spacings.small};
      text-align: center;

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuContactBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const MenuContactBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
  `}
`
