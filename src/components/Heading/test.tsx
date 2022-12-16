import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a primary heading by default', () => {
    renderWithTheme(<Heading>Cursos em Destaque</Heading>)

    expect(
      screen.getByRole('heading', { name: /cursos em destaque/i })
    ).toHaveStyle({
      color: '#193241'
    })
  })

  it('should render a secondary heading when color is passed', () => {
    renderWithTheme(<Heading color="secondary">Cursos em Destaque</Heading>)

    expect(
      screen.getByRole('heading', { name: /cursos em destaque/i })
    ).toHaveStyle({
      color: '#0ADC7D'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Cursos em Destaque</Heading>)

    expect(
      screen.getByRole('heading', { name: /cursos em destaque/i })
    ).toHaveStyle({
      'border-left': '0.7rem solid #0ADC7D'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Cursos em Destaque</Heading>)

    expect(
      screen.getByRole('heading', { name: /cursos em destaque/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #0ADC7D', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Cursos em Destaque</Heading>)
    expect(
      screen.getByRole('heading', { name: /cursos em destaque/i })
    ).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(
      screen.getByRole('heading', { name: /cursos em destaque/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Cursos em Destaque
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Cursos em Destaque/i })

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #193241'
    })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #193241', {
      modifier: '::after'
    })
  })
})
