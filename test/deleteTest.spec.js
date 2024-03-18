const { test } = require('@playwright/test');
const axios = require('axios');

test('DELETE Test', async () => {
    try {
        // Realizar a requisição DELETE
        const response = await axios.delete('https://serverest.dev/usuarios/0ePCUkaDevcURoUD');

        // Exibir a resposta e o status
        console.log('Resposta:', response.data);
        console.log('Status:', response.status);
    } catch (error) {
        // Tratar erros
        console.error('Erro:', error.response.data.message);
        console.error('Status:', error.response.status);
    }
});
