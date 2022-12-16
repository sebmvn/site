import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import Table from '.'

describe('<Table />', () => {
  const props = {
    columns: [
      'Mês',
      'Juros',
      'Total Investido',
      'Total Juros',
      'Total Acumulado'
    ],
    data: [
      {
        month: '0',
        interestRateMonthly: '--',
        totalValue: '5.000,0',
        totalInInterest: '0,00',
        totalAmountInvested: '5.000,00'
      },
      {
        month: '1',
        interestRateMonthly: '50,00',
        totalValue: '7.000,0',
        totalInInterest: '50,00',
        totalAmountInvested: '7.050,00'
      },
      {
        month: '2',
        interestRateMonthly: '70,50',
        totalValue: '9.000,0',
        totalInInterest: '120,50',
        totalAmountInvested: '9.120,50'
      }
    ]
  }

  it('should render the table', () => {
    const { container } = renderWithTheme(<Table {...props} />)

    expect(
      screen.getByRole('columnheader', { name: /mês/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('row', {
        name: /Mês Juros Total Investido Total Juros Total Acumulado/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
