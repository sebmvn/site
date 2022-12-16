import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import CompoundInterestCalculator from '.'

const props = {
  isClear: false,
  compoundInterestResults: [
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
}

describe('<CompoundInterestCalculator />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <CompoundInterestCalculator {...props} />
    )
    expect(
      screen.getByRole('heading', { name: /Simulador de Juros Composto/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
