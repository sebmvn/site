import { renderWithTheme } from 'utils/test-utils'
import Chart, { ChartProps } from '.'

describe('<Chart />', () => {
  const props = {
    chartType: 'bar',
    labels: ['col1', 'col2'],
    datasets: [{ data: [1, 2] }]
  } as ChartProps
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Chart {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
