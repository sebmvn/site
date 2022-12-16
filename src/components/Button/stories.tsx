import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'
import { Search } from '@styled-icons/feather/Search'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Saiba mais'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Saiba mais',
  icon: <Search />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Saiba mais',
  as: 'a',
  href: '/link'
}
