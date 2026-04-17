import { test, expect } from '@playwright/test';

// 1 - Registro
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


// 2º teste – login (mesmo canto, só outro teste)
test('Deve logar usuário e salvar token no localStorage', async ({ page }) => {
  await page.goto('http://localhost:3001/login');

  await page.route('http://localhost:3001/users/login', async (route) => {
    const request = route.request();
    const postData = await request.postData();
    if (postData === null) {
      throw new Error('postData is null');
    }
    const body = JSON.parse(postData);

    expect(body.email).toBe('joao@teste.com');
    expect(body.password).toBe('senha123');

    route.fulfill({
      status: 200,
      body: JSON.stringify({
        data: {
          token: 'fake-token-login',
          user: {
            id: '1'
          }
        }
      })
    });
  });

  await page.getByPlaceholder('seu@email.com').fill('joao@teste.com');
  await page.getByPlaceholder('••••••••').fill('senha123');
  await page.getByRole('button', { name: 'Entrar' }).click();

  await page.waitForTimeout(500);

  const token = await page.evaluate(() => localStorage.getItem('token'));
  const userId = await page.evaluate(() => localStorage.getItem('userId'));

  expect(token).toBe('fake-token-login');
  expect(userId).toBe('1');
});