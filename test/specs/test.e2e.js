const { expect, browser, $ } = require('@wdio/globals')
const { describe, it } = require('mocha')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://the-internet.herokuapp.com/login`)

//         await $('#username').setValue('tomsmith')
//         await $('#password').setValue('SuperSecretPassword!')
//         await $('button[type="submit"]').click()

//         await expect($('#flash')).toBeExisting()
//         await expect($('#flash')).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })
describe("Test suite", ()=>{

    it("First test", async ()=>{
        await browser.url("https://www.python.org/");
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Welcome to Python.org")
    });

    it("Second test", async ()=>{
        const aText = await $("//*[@id='news']/a");
        expect(await aText.getText()).toEqual('News');
    });

    it("Third test", async ()=>{
        await $('//*[@id="events"]/a').click()
        const aLink = await $('//*[@id="content"]/div/aside/div/p[1]/a');
        expect(await aLink.getAttribute('href')).toHaveHref('http://lmorillas.github.io/python_events/');
    });

    it("Fourth test", async ()=>{
        const element = await $('//*[@id="success-stories"]')
        const dispElement = await element.isDisplayed();
        expect(await dispElement).toEqual(true);
    })
})

