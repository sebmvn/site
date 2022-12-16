import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a primary label by default', () => {
    renderWithTheme(<Logo />)

    expect(
      screen.getByLabelText(/Hub do Investidor/i).parentElement
    ).toHaveStyle({
      color: '#193241'
    })
  })

  it('should render a secondary label when color is passed', () => {
    renderWithTheme(<Logo color="secondary" />)

    expect(
      screen.getByLabelText(/Hub do Investidor/i).parentElement
    ).toHaveStyle({
      color: '#0ADC7D'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(
      screen.getByLabelText(/Hub do Investidor/i).parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    expect(
      screen.getByLabelText(/Hub do Investidor/i).parentElement
    ).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideTextOnMobile />)

    expect(
      screen.getByLabelText(/Hub do Investidor/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
