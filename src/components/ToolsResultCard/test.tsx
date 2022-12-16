import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import ToolsResultCard from '.'

describe('<ResultCard />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <ToolsResultCard title="ToolsResultCard" value="R$ 30.999,13" />
    )

    expect(
      screen.getByRole('heading', { name: /ToolsResultCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
