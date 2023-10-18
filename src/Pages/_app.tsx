import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeWrapper } from '../theme/ThemeWrapper'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  )
}

export default App
