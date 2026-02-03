const { getDefaultConfig } = require('expo/metro-config')
const path = require('node:path')

const workspaceRoot = path.resolve(__dirname, '../../')

const defaultConfig = getDefaultConfig(__dirname)
const config = {
  watchFolders: [workspaceRoot],
  ...defaultConfig,
}

module.exports = config
