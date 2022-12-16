import styled, { css, DefaultTheme } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xlarge};
    column-gap: ${theme.spacings.medium};
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'box aside'
      'result aside'
      'info aside';

    ${media.lessThan('medium')`
        grid-template-columns: 1fr;
        grid-template-areas:
        'box'
        'result'
        'info'
        'aside';
    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    grid-area: box;

    width: 100%;
    max-width: ${theme.grid.box};

    background: ${theme.colors.mainBg};
    padding: ${theme.spacings.large};

    border: 1px solid ${theme.colors.inputBg};
    border-radius: ${theme.border.radius};
    box-shadow: 0px 2px 4px ${theme.colors.primary}3F;
  `}
`

export const Aside = styled.aside`
  ${({ theme }) => css`
    grid-area: aside;

    img {
      width: 100%;
      border-radius: ${theme.border.radius};
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`

export const Result = styled.div`
  grid-area: result;
`

export const Info = styled.div`
  grid-area: info;
`

export const GroupCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacings.small};

    width: 100%;
    max-width: ${theme.grid.box};

    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;

    background: ${theme.colors.mainBg};
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    border: 1px solid ${theme.colors.inputBg};
    border-radius: ${theme.border.radius};
    box-shadow: 0px 2px 4px ${theme.colors.primary}3F;
  `}
`

type CurrencyProps = {
  color?: 'default' | 'attention' | 'success'
}
const currencyModifiers = {
  currencyColors: {
    default: (theme: DefaultTheme) => css`
      color: ${theme.colors.gray};
    `,
    attention: (theme: DefaultTheme) => css`
      color: ${theme.colors.bannerLink};
    `,
    success: (theme: DefaultTheme) => css`
      color: ${theme.colors.secondary};
    `
  }
}
export const Currency = styled.span<CurrencyProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    ${!!color && currencyModifiers.currencyColors[color](theme)}
  `}
`

export const Steps = styled.div`
  ${({ theme }) => css`
    p {
      margin-bottom: ${theme.spacings.small};

      a {
        color: ${theme.colors.secondary};
        text-decoration: none;
        font-weight: bold;
      }

      span {
        display: block;
        font-weight: ${theme.font.bold};
        margin-top: ${theme.spacings.small};
      }
    }

    ol {
      list-style: none;
      counter-reset: listCounter;

      li {
        position: relative;
        counter-increment: listCounter;
        margin-bottom: ${theme.spacings.small};
        padding-left: ${theme.spacings.medium};

        ::before {
          color: ${theme.colors.white};
          position: absolute;
          left: 0;
          width: 2.5rem;
          height: 2.5rem;
          content: counter(listCounter);
          border-radius: 50%;

          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;

          border: 2px solid ${theme.colors.secondary};
          box-sizing: border-box;
          padding-bottom: 1px;
          padding-left: 1px;
          background: ${theme.colors.secondary};
        }
      }
    }
  `}
`

export const ChartBox = styled.div``
