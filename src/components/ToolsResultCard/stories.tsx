import { Story, Meta } from '@storybook/react/types-6-0'
import ToolsResultCard, { ToolsResultCardProps } from '.'

export default {
  title: 'ToolsResultCard',
  component: ToolsResultCard,
  args: {
    title: 'Valor total final',
    value: 'R$ 30.999,13'
  }
} as Meta

export const Default: Story<ToolsResultCardProps> = (args) => (
  <ToolsResultCard {...args} />
)
