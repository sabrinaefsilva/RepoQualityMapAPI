const { test, expect } = require('@playwright/test');
const axios = require('axios');

test('PUT Test', async ({ page }) => {
    const requestBody = {
        nome: 'Cha eun woo',
        email: 'nunun@qa.com.br',
        password: 'teste',
        administrador: 'true',
        _id: 'pKY4BhwmllqHBDVc'
    };

    try {
        // Realizar a requisição PUT
        const response = await axios.put('https://serverest.dev/usuarios/pKY4BhwmllqHBDVc', requestBody);

        // Verificar se a resposta da requisição é bem-sucedida
        console.log('Resposta:', response.data);
        console.log('Status:', response.status);

        expect(response.status).toBe(200); // Esperamos que o status seja 200
        expect(response.data.message).toBe('Registro alterado com sucesso'); // Esperamos a mensagem de sucesso
    } catch (error) {
        console.error('Erro:', error); // Imprimir detalhes do erro
       
    }
});
