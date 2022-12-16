import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  column-gap: 1.5%;
  a {
    text-decoration: none;
  }
`

export const BookFeatured = styled.div`
  width: 100%;

  ${media.lessThan('medium')`
    width: 90%;
    height: 100%;
  `}
`
export const Book = styled.div`
  width: 30%;

  ${media.lessThan('medium')`

  width: 45%;

  img{
    width: 100%;
    max-height: 200px;
  }
  `}
`

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  max-width: 1200px;
  min-height: 50px;

  color: #fff;
  margin: -0.4% auto 3% auto;

  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
    max-width: 1000px;
    min-height: 50px;
    margin: -2% auto 5% auto;
  `}
`

export const OverlayBook = styled.div`
  background: rgba(0, 0, 0, 0.8);
  max-width: 1000px;
  min-height: 50px;
  align-self: center;
  justify-self: center;
  color: #fff;
  margin: -3% auto 5% auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: rgba(0, 0, 0, 0.8);
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.xxlarge};

    margin-bottom: ${theme.spacings.large};

    ${media.lessThan('medium')`
    margin-bottom: ${theme.spacings.medium};

    `}
  `}
`
