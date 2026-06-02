import { test, expect } from '@playwright/test';

test('practiceTestautomation', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    await page.getByRole('textbox', { name: 'Username' }).fill('student');

    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

    expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible;

    expect(page.getByRole('link', { name: 'Log out' })).toBeVisible;

    await page.getByRole('link', { name: 'Log out' }).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});
