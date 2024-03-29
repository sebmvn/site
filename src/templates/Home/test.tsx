import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />)
    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
