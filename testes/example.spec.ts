import { test, expect } from '@playwright/test';

test('Deve cadastrar usuário e salvar token', async ({ page }) => {
  // ajusta a URL conforme seu Next está rodando (local ou CI)
  await page.goto('http://localhost:3001/register');

  // Preenche o formulário
  await page.getByPlaceholder('Nome completo').fill('João Silva');
  await page.getByPlaceholder('CPF').fill('123.456.789-00');
  await page.selectOption('select[name="gender"]', 'M');
  await page.locator('input[name="birthDate"]').fill('1990-01-01');
  await page.getByPlaceholder('E-mail').fill('joao@teste.com');
  await page.getByPlaceholder('Telefone').fill('(11) 99999-0000');
  await page.getByPlaceholder('Senha').fill('senha123');
  await page.getByPlaceholder('Confirmar').fill('senha123');

  // Espera o envio do POST (opcional)
  await page.getByRole('button', { name: 'Registrar' }).click();

  // Se você quiser, só testa que o formulário foi submetido sem erro de console
  // e o localStorage foi preenchido (esse é só um exemplo simples).
});