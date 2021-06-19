import { KohhiTheme } from 'theme/kohhi-theme'

type KohhiThemeType = typeof KohhiTheme

declare module 'styled-components' {
  interface DefaultTheme extends KohhiThemeType {}
}
