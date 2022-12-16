import { render, screen } from '@testing-library/react'

import Books from '.'

describe('<Books />', () => {
  it('should render the heading', () => {
    const { container } = render(<Books />)

    expect(screen.getByRole('heading', { name: /Books/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
