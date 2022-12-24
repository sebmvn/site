import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  background: url('/img/constellation.png');
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 70vh;
`

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  word-wrap: break-word;

  ${media.lessThan('medium')`
    font-size: 2rem;
  `}
`

export const MutedText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.muted};
    margin-top: -6%;

    ${media.lessThan('medium')`
    margin-top: -20%;
    font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.muted};
    max-width: 68rem;
    word-wrap: break-word;
    text-align: center;

    ${media.lessThan('medium')`
    padding: 0 ${theme.spacings.small}
  `}
  `}
`

export const FeaturedText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: bold;
  `}
`
