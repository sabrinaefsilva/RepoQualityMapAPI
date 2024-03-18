module.exports = {
  testDir: './test',
  webServer: {
      command: 'npm start',
      timeout: 60000,
      reuseExistingServer: !process.env.CI
  },
  globalSetup: './test/globalSetup.js',
  globalTeardown: './test/globalTeardown.js',
  workers: 1 // Adiciona essa linha para desativar o uso de múltiplos processos de trabalhadores
};
