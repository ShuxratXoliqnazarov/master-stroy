import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      // Сайт одностраничный: каждый виджет используется ровно один раз на единственной странице,
      // поэтому правило «слайс с одной ссылкой — слить с потребителем» здесь не применимо.
      'fsd/insignificant-slice': 'off',
    },
  },
])
