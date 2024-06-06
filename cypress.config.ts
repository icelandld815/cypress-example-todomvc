import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  projectId: "ohibgb",
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8888',
  },
})
