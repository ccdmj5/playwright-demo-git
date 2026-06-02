import { test, expect } from '@playwright/test';

test('practiceTestautomation', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/');

    await page.getByRole('link', { name: 'CONTACT' }).click();

    await page.getByRole('textbox', { name: 'First'}).fill('Josué');

    await page.getByRole('textbox', { name: 'Last'}).fill('Aldaco Fonseca');

    await page.getByRole('textbox', { name: 'Email'}).fill('josue_fonseca_1499@hotmail.com');

    await page.getByRole('textbox', { name: 'Comment or message'}).fill('Hello, I\'m automating this message 🧙‍♂️');

    await page.getByRole('checkbox', { name: 'I\'m not a robot' }).click();

    expect(page.getByRole('button', { name: 'Submit' })).toBeVisible;

    await page.getByRole('button', { name: 'Submit' }).click();
});
