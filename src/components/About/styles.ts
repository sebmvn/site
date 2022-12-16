import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: ${theme.spacings.xxlarge} 0;

    ${media.lessThan('medium')`
    flex-direction: column;
    text-align: center;

    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: rgba(0, 0, 0, 0.8);
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.xxlarge};

    margin-bottom: ${theme.spacings.large};

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};

    margin-bottom: ${theme.spacings.xsmall};
  `}
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    max-width: 60rem;
    padding-right: ${theme.spacings.xxlarge};

    align-items: space-between;
    justify-content: center;
    flex-direction: column;

    ${media.lessThan('medium')`
      padding: 0 ${theme.spacings.small};
    `}
  `}
`

export const DescriptionText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.muted};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.small};
  `}
  `}
`

export const BoxImage = styled.div`
  ${media.lessThan('medium')`
    max-width: 200px;
    max-height: 200px;
 `}
`
