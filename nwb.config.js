module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      externals: {
        react: 'React'
      },
      global: 'PixelShifter'
    }
  }
}
