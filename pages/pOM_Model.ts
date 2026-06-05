import { expect, type Locator, type Page } from '@playwright/test';

export class POM_Model {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page
        this.username = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.errorMessage = page.locator('#error')
    } 

    async goto() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
    }   

    //async verifyLoginSuccess() {
    //  await expect(this.page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    //  await expect(this.page).toHaveTitle('Logged In Successfully | Practice Test Automation');
    //  await expect(this.page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
    //  await expect(this.page.getByRole('link', { name: 'Log out' })).toBeVisible();
    //}

    //async logout() {
    //  //  await this.page.getByRole('link', { name: 'Log out' }).click();
    //  await expect(this.page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    //}
}

