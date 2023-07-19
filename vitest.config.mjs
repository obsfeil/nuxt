import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  // any custom vitest config you require
})
// @vitest-environment nuxt
import { test } from 'vitest'

test('my test', () => {
  // ... test with Nuxt environment!
})
