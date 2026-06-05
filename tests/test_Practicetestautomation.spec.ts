import { test, expect } from '@playwright/test';
import { POM_Model } from './pOM_Model';

test('practiceTestautomation', async ({ page }) => {
    
    const pom = new POM_Model(page);
    
    await pom.goto();
    await pom.login('student', 'Password123');
    await pom.verifyLoginSuccess();
    await pom.logout();
});
