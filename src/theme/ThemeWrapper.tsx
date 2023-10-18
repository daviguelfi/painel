import React from 'react'
import { ColorModeProvider, getCustomTheme, ThemeProvider } from '@dasa-health/alma-react'
import { navTokens } from '@dasa-health/alma-tokens'

const customTheme = getCustomTheme(navTokens)

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  //@ts-ignore
  <ThemeProvider theme={customTheme}>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ThemeProvider>
)
