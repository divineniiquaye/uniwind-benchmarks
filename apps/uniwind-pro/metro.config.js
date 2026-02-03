const { getDefaultConfig } = require('expo/metro-config')
const { withUniwindConfig } = require('uniwind/metro')
const path = require('node:path')

const workspaceRoot = path.resolve(__dirname, '../../')

const defaultConfig = getDefaultConfig(__dirname)
const config = {
  watchFolders: [workspaceRoot],
  resolver: {
    nodeModulesPaths: ['./node_modules', '../../node_modules'],
  },
  ...defaultConfig,
}

module.exports = withUniwindConfig(config, {
  cssEntryFile: './global.css',
})
