module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          config: './src/config',
          consts: './src/consts',
          hooks: './src/hooks',
          public: './public',
          theme: './src/theme',
          utils: './src/utils',
          views: './src/views'
        }
      }
    ]
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
}
