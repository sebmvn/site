import styled, { css } from 'styled-components'

import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.footerBg};
    padding-top: ${theme.spacings.large};

    ${media.lessThan('medium')`
      padding-top: ${theme.spacings.medium};
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
    }

    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    a:hover {
      text-decoration: underline;
    }

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

     p {
        font-size: ${theme.font.sizes.xsmall};
      }
    `}
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxlarge};

    > :last-child {
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`

    & .mapouter{
      iframe{

        max-width: 100%;
      }
    }
    `}
  `}
`

export const SocialMedia = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    margin-bottom: ${theme.spacings.small};

    a {
      padding: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};

      background: ${theme.colors.text};
      border-radius: 100%;

      svg {
        width: 2.4rem;
        stroke-width: 0.2rem;
        color: ${theme.colors.footerBg};
      }

      ${media.lessThan('medium')`
        margin-right: ${theme.spacings.xxsmall};
      `}
    }
  `}
`

export const ContactButton = styled.a`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`

export const Menu = styled.nav`
  ${({ theme }) => css`
    a {
      margin-bottom: ${theme.spacings.xxsmall};

      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};

      color: ${theme.colors.assets100};
    }
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 18rem;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    background-color: ${theme.colors.copyrightBg};
    font-size: ${theme.font.sizes.xsmall};

    padding: ${theme.spacings.xsmall} 0;

    margin-top: ${theme.spacings.large};
    text-align: center;
  `}
`
