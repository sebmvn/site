import { Story, Meta } from '@storybook/react/types-6-0'
import { Mail } from '@styled-icons/feather/Mail'

import SelectField, { SelectFieldProps } from '.'

const options = [
  {
    value: 'Option 1',
    label: 'Option 1'
  },
  {
    value: 'Option 2',
    label: 'Option 2'
  },
  {
    value: 'Option 3',
    label: 'Option 3'
  }
]

export default {
  title: 'Form/SelectField',
  component: SelectField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Mail />,
    initialValue: '',
    disabled: false,
    options
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'symbol' }
  }
} as Meta<SelectFieldProps>

export const Default: Story<SelectFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <SelectField {...args} />
  </div>
)

export const withError: Story<SelectFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <SelectField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
