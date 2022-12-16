import { render, screen } from '@testing-library/react'

import CardAtivity from '.'

describe('<CardAtivity />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <CardAtivity
        ativity=""
        altImage=""
        calendar={[{ day: '', hour: '' }]}
        content
      />
    )

    expect(
      screen.getByRole('heading', { name: /CardAtivity/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
