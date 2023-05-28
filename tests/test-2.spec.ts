import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Product Name').click();
  await page.getByPlaceholder('Product Name').fill('Produkt1');
  await page.getByPlaceholder('Product Name').press('Tab');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Befehl');
  await page.getByPlaceholder('Description').press('Control+a');
  await page.getByPlaceholder('Description').fill('Beschreibung');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').click({
    clickCount: 4
  });
  await page.getByRole('spinbutton').click({
    clickCount: 3
  });
  await page.getByRole('spinbutton').fill('10');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByPlaceholder('Product Name').click();
  await page.getByPlaceholder('Product Name').fill('Produkt2');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Beschreibung 2');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').dblclick();
  await page.getByRole('spinbutton').press('Control+a');
  await page.getByRole('spinbutton').fill('28');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').click({
    clickCount: 4
  });
  await page.getByRole('spinbutton').fill('9');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByPlaceholder('Product Name').click();
  await page.getByPlaceholder('Product Name').fill('Produkt3');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').press('ArrowRight');
  await page.getByPlaceholder('Description').fill('Beschreibung 3');
  await page.getByRole('spinbutton').dblclick();
  await page.getByRole('spinbutton').fill('10');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'View Cart' }).click();
  await page.getByRole('button', { name: 'Delete' }).nth(2).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.getByText('E-commerceProduct PageAdd to CartView Cart').click();await page.goto('http://localhost:3000/');
});