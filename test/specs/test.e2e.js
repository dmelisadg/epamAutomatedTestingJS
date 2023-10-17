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

describe("Test suite - Homework 1", ()=>{
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

describe("Test suite - Homework 2", ()=>{

    it("First test", async ()=>{
        await browser.url("https://www.wolfram.com/mathematica/");
        const headerID = await $('#_header');
        //console.log(await headerID.isExisting())
        expect(await headerID.isExisting()).toEqual(true);
    });

    it("Second test", async ()=>{
        await browser.url("https://www.wolfram.com/mathematica/")
        const headerID = await $('/html/body/header[2]/div/nav/div[2]/ul/li[2]').click({
            button: "0",
            x:25.74,
            y:13
        });
        await 
        //console.log(await headerID)
        expect(await headerID.getTitle()).toEqual('Download a Free Trial of Mathematica');
    });

    it("Third test", async ()=>{
        await browser.url("https://www.wolfram.com/mathematica/")
        const iconSearch = await $('/html/body/header[1]/div[2]/nav/div[6]/a/i[2]').click();
        await browser.pause(1000);
        const valueSearch = await $('/html/body/header[1]/div[2]/nav/div[6]/ul/li/form/div/input');
        await valueSearch.setValue('orthogonal')
        await browser.pause(4000);
    });

    it("Fourth test", async ()=>{
        await browser.url("https://www.wolfram.com/mathematica/")
        const productIcon = await $('/html/body/header[1]/div[2]/nav/div[1]')
        // console.log(await productIcon);
        // await browser.pause(4000);
        expect(await productIcon.isExisting()).toEqual(true);
    });

    it("Fifth test", async ()=>{
        await browser.url("https://www.wolfram.com/mathematica/")
        const navProd = await $('/html/body/header[1]/div[2]/nav')
        const divProd = await navProd.$$('div')[1].$('a').isClickable()
       // console.log(await divProd.isClickable());
        expect(divProd).toEqual(false);
    });

})

// it("Second test", async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/")
//     const headerID = await $('/html/body/header[1]/div[1]');
//     //console.log(await headerID)
//     expect(await headerID.getProperty('id')).toEqual('_header-t');
// });