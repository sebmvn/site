import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open mobile menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open desktop menu/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/search/i)).toHaveLength(1)

    expect(
      screen.getByRole('img', { name: /hub do investidor/i })
    ).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open mobile menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should handle the open/close desktop menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open desktop menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(
      screen.queryByLabelText(/open notification/i)
    ).not.toBeInTheDocument()

    expect(screen.getAllByText(/login/i)).toHaveLength(2)
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show notification icon when logged in', () => {
    renderWithTheme(<Menu username="Username" />)

    expect(screen.getByLabelText(/open notification/i)).toBeInTheDocument()

    expect(screen.queryByText(/login/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })

  it('should change icon (theme) to moon/sun', () => {
    renderWithTheme(<Menu username="Username" />)

    expect(screen.queryByLabelText(/sun icon/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/moon icon/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByLabelText(/change theme/i))
    expect(screen.queryByLabelText(/moon icon/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/sun icon/i)).not.toBeInTheDocument()
  })
})
