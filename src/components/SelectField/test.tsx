import userEvent from '@testing-library/user-event'
import { Mail } from '@styled-icons/feather/Mail'

import SelectField from '.'
import { renderWithTheme } from 'utils/test-utils'
import { screen } from '@testing-library/react'

describe('<SelectField />', () => {
  const options = [{ value: '1', label: '1' }]

  it('Renders with Label', () => {
    renderWithTheme(
      <SelectField label="Label" name="Label" options={options} />
    )

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<SelectField options={options} />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<SelectField placeholder="hey you" options={options} />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    renderWithTheme(
      <SelectField icon={<Mail data-testid="icon" />} options={options} />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <SelectField
        icon={<Mail data-testid="icon" />}
        iconPosition="right"
        options={options}
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    renderWithTheme(
      <SelectField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        options={options}
        disabled
      />
    )
  })

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <SelectField
        icon={<Mail data-testid="icon" />}
        label="TextField"
        error="Error message"
        options={options}
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <SelectField label="TextField" name="TextField" options={options} />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(
      <SelectField
        label="TextField"
        name="TextField"
        disabled
        options={options}
      />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
