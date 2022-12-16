import { Story, Meta } from '@storybook/react/types-6-0'
import Tab, { TabsProps } from '.'

export default {
  title: 'Tab',
  component: Tab,
  args: {
    components: [
      {
        title: 'Tab Component 1',
        content: <span>Component 1</span>
      },
      {
        title: 'Tab Component 2',
        content: <span>Component 2</span>
      },
      {
        title: 'Tab Component 3',
        content: <span>Component 3</span>
      }
    ]
  }
} as Meta

export const Default: Story<TabsProps> = (args) => <Tab {...args} />
