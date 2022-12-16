import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import Footer from '.'

describe('<Footer />', () => {
  it('should render 2 column topics', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByTestId(/contact/i)).toBeInTheDocument()
    expect(screen.getByTestId(/resources/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
