import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('button', { name: 'View Cart' }).click();
  await page.getByRole('heading', { name: 'E-commerce' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Blabla');
  await page.getByPlaceholder('Description').press('Tab');
  await page.getByRole('spinbutton').click({
    clickCount: 5
  });
  await page.getByRole('spinbutton').click({
    clickCount: 7
  });
  await page.getByRole('spinbutton').fill('7');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('9');
  await page.getByRole('spinbutton').click({
    clickCount: 4
  });
  await page.getByRole('spinbutton').fill('0');
  await page.getByPlaceholder('Product Name').click();
  await page.getByRole('spinbutton').click();
  await page.getByPlaceholder('Description').click();
  await page.getByRole('spinbutton').dblclick();
  await page.getByRole('spinbutton').fill('8');
  await page.getByPlaceholder('Product Name').dblclick();
  await page.getByPlaceholder('Product Name').fill('Produktbla');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('heading', { name: 'E-commerce' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.getByPlaceholder('Product Name').click();
  await page.getByPlaceholder('Product Name').fill('ProduktBla2');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('blablabla');
  await page.getByRole('spinbutton').click({
    clickCount: 3
  });
  await page.getByRole('spinbutton').fill('9');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.getByRole('button', { name: 'View Cart' }).click();
  await page.getByRole('heading', { name: 'E-commerce' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.getByPlaceholder('Product Name').dblclick();
  await page.getByPlaceholder('Product Name').click();
  await page.getByPlaceholder('Product Name').fill('Blabla');
  await page.getByPlaceholder('Product Name').press('Tab');
  await page.getByPlaceholder('Description').fill('ablasd');
  await page.getByPlaceholder('Description').press('Tab');
  await page.getByRole('spinbutton').fill('10');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'View Cart' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.getByRole('heading', { name: 'E-commerce' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
});