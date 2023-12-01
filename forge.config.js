const {
  utils: { fromBuildIdentifier },
} = require('@electron-forge/core');

const appIconFolder = './src/assets/icons';

module.exports = {
  packagerConfig: {
    asar: true,
    appBundleId: fromBuildIdentifier({
      beta: 'com.beta.electron-whatsapp-web-client.marco-abate.app',
      prod: 'com.electron-whatsapp-web-client.marco-abate.app',
    }),
    icon: appIconFolder,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: `${appIconFolder}/win/icon.ico`,
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: `${appIconFolder}/png/1024x1024.png`,
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        icon: `${appIconFolder}/png/1024x1024.png`,
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: `${appIconFolder}/mac/icon.icns`,
        overwrite: true,
        name: 'Whatsapp',
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  buildIdentifier: process.env.IS_BETA ? 'beta' : 'prod',
};
