const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const sea = require("node:sea");

describe('Wikipedia App Test', () => {
    it('should search for a specific word and verify the result', async () => {
        const searchContainer = await $('android=new UiSelector().resourceId("org.wikipedia:id/search_container")');
        await searchContainer.waitForExist({timeout: 10000});

        await searchContainer.click();
        const searchInput = await $('android=new UiSelector().resourceId("org.wikipedia:id/search_src_text")');

        await searchInput.setValue('Appium Testing');

        const searchResult = await $('android=new UiSelector().textContains("Appium")');
        await searchResult.waitForExist({timeout: 10000});

        const isDisplayed = await searchResult.isDisplayed();
        expect(isDisplayed).toBe(true);

        await driver.saveScreenshot('./screenshots/searchResult.png');
    })
})

