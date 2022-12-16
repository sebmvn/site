import { renderWithTheme } from 'utils/test-utils'

import Tabs from '.'

describe('<Tabs />', () => {
  const components = [
    {
      title: 'Tab Component 1',
      content: <span>Component 1</span>
    },
    {
      title: 'Tab Component 2',
      content: <span>Component 2</span>
    },
    {
      title: 'Tab Component 3',
      content: <span>Component 3</span>
    }
  ]
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Tabs components={components} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
