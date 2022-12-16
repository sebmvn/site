import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import Base from '.'

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByLabelText(/open mobile menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open desktop menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId(/contact/i)).toBeInTheDocument()
  })
})
