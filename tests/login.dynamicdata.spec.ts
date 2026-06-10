import { test, expect } from '@playwright/test';
import { POM_Model } from '../pages/pOM_Model';
import loginData from '../test-data/loginDataNew.json';

loginData.forEach((data) => {
    
    if (!data.run) return;

    test(`Login Test - ${data.username} - ${data.expected}`, async ({ page }) => {

        const loginPage = new POM_Model(page);
        await loginPage.goto();
        await loginPage.login(data.username, data.password);

        if(data.expected === "Logged In Successfully") {
            await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
        
        }else{
            await expect(loginPage.errorMessage).toBeVisible();
        }

    });
})
