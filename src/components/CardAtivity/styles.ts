import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    background: ${theme.colors.mainBg};
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    margin: ${theme.spacings.large} 0;

    border: 1px solid ${theme.colors.inputBg};
    border-radius: ${theme.border.radius};
    box-shadow: 0px 2px 4px ${theme.colors.primary}3F;

    ${media.lessThan('medium')`
      width: 90%;
      padding: ${theme.spacings.medium} ${theme.spacings.medium};
      margin:  ${theme.spacings.large} auto;

    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: -14%;
    background: #0d2538;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};

    border: 1px solid ${theme.colors.inputBg};
    border-radius: ${theme.border.radius};
    box-shadow: 0px 2px 4px ${theme.colors.primary}3F;
  `}
`

export const BoxImage = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 35%;

    ${media.lessThan('medium')`
    margin:  ${theme.spacings.xsmall} auto;

  `}
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const BoxCalendarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
  height: 100%;
`

export const BoxCalendar = styled.div`
  ${({ theme }) => css`
    display: flex;

    align-items: center;
    margin-top: ${theme.spacings.xxsmall};

    color: ${theme.colors.muted};
    font-weight: 500;

    svg {
      color: ${theme.colors.primary};
      margin-right: ${theme.spacings.small};
    }
  `}
`
