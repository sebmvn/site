import styled, { css } from 'styled-components'

import { Grid } from 'components/Grid'
import * as ToolsResultCardStyles from 'components/ToolsResultCard/styles'

type WrappersProps = {
  columns: 'one' | 'two' | 'three' | 'default'
}

const wrapperModifiers = {
  one: () => css`
    ${Grid} {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  `,

  two: () => css`
    ${Grid} {
      grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    }
  `,

  three: () => css`
    ${Grid} {
      grid-template-columns: repeat(auto-fill, minmax(36rem, 1fr));
    }
  `,

  default: () => css`
    ${Grid} {
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }
  `
}

export const Wrapper = styled.div<WrappersProps>`
  ${({ theme, columns }) => css`
    ${Grid} {
      ${ToolsResultCardStyles.Wrapper}:nth-child(3n+1) {
        ${ToolsResultCardStyles.Value} {
          color: ${theme.colors.gray};
        }
      }
      ${ToolsResultCardStyles.Wrapper}:nth-child(3n+2) {
        ${ToolsResultCardStyles.Value} {
          color: ${theme.colors.bannerLink};
        }
      }
      ${ToolsResultCardStyles.Wrapper}:nth-child(3n+3) {
        ${ToolsResultCardStyles.Value} {
          color: ${theme.colors.secondary};
        }
      }
    }

    ${!!columns && wrapperModifiers[columns]}
  `}
`
