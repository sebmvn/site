import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    flex: 1 0 auto;
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-top: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
  margin-top: ${theme.spacings.xxsmall};
  padding-top: 0;
  `}
  `}
`
