import { Background } from 'components/base/background'
import { KohhiThemeProvider } from 'theme/kohhi-theme-provider'
import { Meta, Story } from '@storybook/react'

const meta: Meta = {
  component: Background,
  title: 'Components/Base/Background',
  decorators: [story => <KohhiThemeProvider>{story()}</KohhiThemeProvider>]
}

export default meta

export const Primary: Story = () =>
  <Background
    style={{ position: 'fixed', width: '100%', height: '100%' }}
  />
