import { Story, Meta } from '@storybook/react/types-6-0'
import Books from '.'

export default {
  title: 'Books',
  component: Books
} as Meta

export const Default: Story = () => <Books />
