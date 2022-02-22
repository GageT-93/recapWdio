const DynamicLoadingPage = require('../pageobjects/dynamic-loading.page');


describe('My Dynamic Loading Page', () => {
    it('should verify that start button exists', async () => {
        await DynamicLoadingPage.open();

        await expect(DynamicLoadingPage.btnStart).toBeExisting();
        
    });
});