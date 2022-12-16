import { Story, Meta } from '@storybook/react/types-6-0'
import CardAtivity from '.'

export default {
  title: 'CardAtivity',
  component: CardAtivity
} as Meta

export const Default: Story = () => (
  <CardAtivity
    ativity=""
    altImage=""
    calendar={[{ day: '', hour: '' }]}
    content
  />
)
