import { Story, Meta } from '@storybook/react/types-6-0'
import Chart, { ChartProps } from '.'

const props = {
  chartType: 'bar',
  labels: ['col1', 'col2'],
  datasets: [{ data: [1, 2] }]
} as ChartProps

export default {
  title: 'Chart',
  component: Chart
} as Meta

export const Default: Story = () => <Chart {...props} />
