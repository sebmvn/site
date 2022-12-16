import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const Cards = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};
  `}

  ${media.lessThan('medium')`
  flex-direction: column;
  text-align: center;
  width: 100%;
  column-gap: 0;
  `}
`
export const CardContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.muted};
    font-weight: 500;
    text-align: justify;

    span {
      color: ${theme.colors.primary};
    }
    ul {
      margin: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    }
  `}
`

export const CardFooter = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.muted};
    font-weight: 500;
    text-align: justify;
    margin-bottom: ${theme.spacings.xxlarge};
    span.feature {
      color: ${theme.colors.primary};
    }
    span.whatsapp {
      color: '#00A672';
    }

    ${media.lessThan('medium')`
      padding: 0 ${theme.spacings.small};

    `}
  `}
`
