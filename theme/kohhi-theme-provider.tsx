import { ThemeProvider } from 'styled-components'
import { KohhiTheme } from 'theme/kohhi-theme'
import React from 'react'

export function KohhiThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={KohhiTheme}>{children}</ThemeProvider>
}
