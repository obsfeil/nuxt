import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from /* `'vitest/config'` is importing the configuration
defaults and the `defineConfig` function from the
`vitest` package. The configuration defaults provide a
set of default values for the Vite test configuration,
while the `defineConfig` function is used to define the
test configuration object. */
'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    }
  })
)
