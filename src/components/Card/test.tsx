import theme from 'styles/theme'
import { renderWithTheme } from 'utils/test-utils'

import { Card } from '.'

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Card>
        <span>Hub do Investidor</span>
      </Card>
    )

    expect(container.firstChild).toHaveStyleRule(
      'background',
      theme.colors.mainBg
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
