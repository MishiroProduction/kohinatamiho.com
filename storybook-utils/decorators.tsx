import { KohhiThemeProvider } from 'theme/kohhi-theme-provider'
import { ReactElement } from 'react'

export function kohhiThemeProviderDecorator(story: () => ReactElement<unknown>) {
  return <KohhiThemeProvider>{story()}</KohhiThemeProvider>
}
