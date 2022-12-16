import styled, { css } from 'styled-components'
import { Card } from 'components/Card'

export const Wrapper = styled.article`
  ${Card} {
    align-items: center;
    text-align: center;
  }
`

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`

export const Value = styled.data`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.black};
  `}
`
