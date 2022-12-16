import { Story, Meta } from '@storybook/react/types-6-0'
import ToolsShowResults, { ToolsShowResultsProps } from '.'

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

export default {
  title: 'ToolsShowResults',
  component: ToolsShowResults,
  args: {
    items,
    columns: 'default'
  }
} as Meta

export const Default: Story<ToolsShowResultsProps> = (args) => (
  <ToolsShowResults {...args} />
)
