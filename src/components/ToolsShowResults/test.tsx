import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import ToolsShowResults from '.'

const items = [
  {
    title: 'Valor total final',
    value: 'R$ 58.877,75'
  },
  {
    title: 'Valor total investido',
    value: 'R$ 52.400,00'
  },
  {
    title: 'Total em juros',
    value: 'R$ 6.477,75'
  }
]

describe('<ToolsShowResults />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <ToolsShowResults title="ToolsShowResults" items={items} />
    )

    expect(
      screen.getByRole('heading', { name: /ToolsShowResults/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
