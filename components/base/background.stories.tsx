import { Background } from 'components/base/background'
import { Meta, Story } from '@storybook/react'
import { kohhiThemeProviderDecorator } from 'storybook-utils/decorators'

const meta: Meta = {
  component: Background,
  title: 'Components/Base/Background',
  decorators: [kohhiThemeProviderDecorator]
}

export default meta

export const Primary: Story = () =>
  <Background
    style={{ position: 'fixed', width: '100%', height: '100%' }}
  />
