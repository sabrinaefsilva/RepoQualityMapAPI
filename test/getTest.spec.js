const { test, expect } = require('@playwright/test');

test('GET Test', async ({ page }) => {
    // Realizar a requisição GET
    await page.goto('https://serverest.dev/usuarios');

    // Obter o status da resposta da requisição usando page.evaluate
    const status = await page.evaluate(() => {
        return window.fetch('https://serverest.dev/usuarios').then(response => response.status);
    });

    // Verificar se o status da resposta é 200 (OK)
    expect(status).toBe(200);
});
