import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import FormCompoundInterestCalculator from '.'

describe('<FormCompoundInterestCalculator />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<FormCompoundInterestCalculator />)

    expect(screen.getByTestId(/initialValue/i)).toBeInTheDocument()
    expect(screen.getByTestId(/monthlyValue/i)).toBeInTheDocument()
    expect(screen.getByTestId(/interestRate/i)).toBeInTheDocument()
    expect(screen.getByTestId(/period/i)).toBeInTheDocument()
    expect(screen.getByTestId(/handleSubmit/i)).toBeInTheDocument()
    expect(screen.getByTestId(/handleCleanForm/i)).toBeInTheDocument()
    expect(container.parentElement).toMatchSnapshot()
  })

  it('should show an invalid value error', async () => {
    renderWithTheme(<FormCompoundInterestCalculator />)

    userEvent.click(screen.getByTestId(/handleSubmit/i))

    expect(await screen.findAllByText(/campo obrigatório/i)).toHaveLength(4)
  })

  it('should show an invalid value error', async () => {
    renderWithTheme(<FormCompoundInterestCalculator />)

    userEvent.type(screen.getByTestId(/initialValue/i), '5887775')

    expect(screen.getByTestId(/initialValue/i).getAttribute('value')).toBe(
      '58.877,75'
    )
  })

  it('should submit a form when values is valid', async () => {
    renderWithTheme(<FormCompoundInterestCalculator />)

    userEvent.type(screen.getByTestId(/initialValue/i), '500000')
    userEvent.type(screen.getByTestId(/monthlyValue/i), '200000s')
    userEvent.type(screen.getByTestId(/interestRate/i), '100')
    userEvent.type(screen.getByTestId(/period/i), '12')

    userEvent.click(screen.getByTestId(/handleSubmit/i))

    expect(screen.getByTestId(/initialValue/i).getAttribute('value')).toBe(
      '5.000,00'
    )
    expect(screen.getByTestId(/monthlyValue/i).getAttribute('value')).toBe(
      '2.000,00'
    )
    expect(screen.getByTestId(/interestRate/i).getAttribute('value')).toBe(
      '1,00'
    )
    expect(screen.getByTestId(/period/i).getAttribute('value')).toBe('12')
  })

  it('should clear form on click in button', async () => {
    renderWithTheme(<FormCompoundInterestCalculator />)

    userEvent.type(screen.getByTestId(/initialValue/i), '500000')

    userEvent.click(screen.getByTestId(/handleCleanForm/i))

    expect(screen.getByTestId(/initialValue/i).getAttribute('value')).toBe('')
  })
})
