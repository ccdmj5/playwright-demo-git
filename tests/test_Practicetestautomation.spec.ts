import { test, expect } from '@playwright/test';
import { POM_Model } from '../pages/pOM_Model';
import loginData from '../test-data/loginData.json';

test('validLogin', async ({ page }) => {
    
    const pom = new POM_Model(page);
    
    await pom.goto();
    //await pom.login('student', 'Password123');
    await pom.login(
        loginData['valid user'].username,
        loginData['valid user'].password    
    );
    //await pom.verifyLoginSuccess();
    //await pom.logout();
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
});

test('invalidLogin', async ({ page }) => {
    
    const pom = new POM_Model(page);
    
    await pom.goto();
    //await pom.login('student', 'Password123');
    await pom.login(
        loginData['invalid user'].username,
        loginData['invalid user'].password    
    );
    //await pom.verifyLoginSuccess();
    //await pom.logout();
    await expect(pom.errorMessage).toBeVisible();
});
