import { render, screen } from '@testing-library/react'

import FixedButtonOnBottom from '.'

describe('<FixedButtonOnBottom />', () => {
  it('should render the heading', () => {
    const { container } = render(<FixedButtonOnBottom />)

    expect(screen.getByRole('heading', { name: /FixedButtonOnBottom/i })).toBeInTheDocument()

	expect(container.firstChild).toMatchSnapshot()
  })
})