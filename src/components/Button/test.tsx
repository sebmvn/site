import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import { Search } from '@styled-icons/feather/Search'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buscar</Button>)

    expect(screen.getByRole('button', { name: /Buscar/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buscar</Button>)

    expect(screen.getByRole('button', { name: /Buscar/i })).toHaveStyle({
      height: '3rem',

      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buscar</Button>)

    expect(screen.getByRole('button', { name: /Buscar/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',

      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buscar</Button>)

    expect(screen.getByRole('button', { name: /Buscar/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<Search data-testid="icon" />}>Buscar</Button>
    )

    expect(screen.getByText(/Buscar/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render solid background by default', () => {
    renderWithTheme(<Button>Buscar</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      background: '#0ADC7D',
      color: '#193241'
    })
  })

  it('should render gradiend background version', () => {
    renderWithTheme(<Button background="gradient">Buscar</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      background: 'linear-gradient(180deg,#0ADC7D 0%,#00823c 100%',
      color: '#F4F4F4'
    })
  })

  it('should render transparent background version', () => {
    renderWithTheme(<Button background="transparent">Buscar</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      background: 'transparent',
      color: '#0ADC7D'
    })
  })

  it('should render button as a link', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Buscar
      </Button>
    )

    debug(container)

    expect(screen.getByRole('link', { name: /Buscar/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
