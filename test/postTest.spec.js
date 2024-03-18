const { test, expect } = require('@playwright/test');
const axios = require('axios');

const postData = {
    nome: "Cha eun woo",
    email: "eunu@qa.com.br",
    password: "teste",
    administrador: "true"
};

test('POST Test', async ({ page }) => {
    try {
        // Realizar a requisição POST usando Axios
        const response = await axios.post('https://serverest.dev/usuarios', postData, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Exibir a resposta no console
        console.log('Resposta:', response);

        // Verificar se a resposta da requisição não é nula
        expect(response).not.toBeNull();

        // Verificar o código de status da resposta
        if (response.status === 201) {
            // Verificar se o cadastro foi realizado com sucesso
            const responseData = response.data;
            expect(responseData.message).toBe('Cadastro realizado com sucesso');
            expect(responseData._id).toBeDefined();
        } else if (response.status === 400) {
            // Verificar se o e-mail já está cadastrado
            const responseData = response.data;
            expect(responseData.message).toBe('Este email já está sendo usado');
        } else {
            // Se recebermos outro código de status, falhar o teste
            throw new Error(`Unexpected status code: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Failed to make POST request: ${error.message}`);
    }
});
