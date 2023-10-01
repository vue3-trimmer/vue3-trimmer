import { defineConfig, presetUno, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives(),
  ],

  cli: {
    entry: {
      patterns: ['./src/components/**/*.vue'],
      outFile: './src/style/index.css',
    },
  },
})
