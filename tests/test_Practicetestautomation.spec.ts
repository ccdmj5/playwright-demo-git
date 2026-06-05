import { test, expect } from '@playwright/test';
import { POM_Model } from './pOM_Model.spec';

test('practiceTestautomation', async ({ page }) => {
    const username = 'student';
    const password = 'Password123';
    
    const pom = new POM_Model(page);
    await pom.goto();
    await pom.login(username, password);
    await pom.verifyLoginSuccess();
    await pom.logout();
});
