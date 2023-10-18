import { render, screen } from '@testing-library/react'

import { ThemeWrapper } from '../theme/ThemeWrapper'
import  Home  from '../pages/index'

test('renders HOME MAIN component', () => {
  render(
    <ThemeWrapper>
      <Home />
    </ThemeWrapper>
  )
  const skeletonElement = screen.getByTestId('home-main-container')
  expect(skeletonElement).toBeInTheDocument()
})
