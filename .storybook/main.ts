import path from 'path'
import webpack from 'webpack'
import produce from 'immer'

export default {
  stories: ['../**/*.stories.@(tsx|jsx|mdx)'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (baseConfig: webpack.Configuration) => {
    if (baseConfig.resolve?.modules) {
      baseConfig.resolve.modules = [...baseConfig.resolve.modules, path.resolve('./')]
    }
    return baseConfig
  },
}
