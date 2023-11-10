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

describe("Homework 1 - Testing at least 4 scenarios trying to use both XPath and CSS selectors", ()=>{
    beforeEach(async ()=>{
        await browser.url("https://www.python.org/");
    })
    it("First test - WebPage is working right", async ()=>{
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Welcome to Python.org")
    });
    it("Second test - ID CSS Selector", async ()=>{
        const aText = await $("[id='news']");
        expect(await aText.getText()).toEqual('News');
    });
    it("Third test - ID CSS Selector and XPath", async ()=>{
        await $('[id="events"]').click()
        const aLink = await $('/html/body/div/header/div/nav/ul/li[7]/a');
        expect(await aLink.getAttribute('href')).toHaveHref('http://lmorillas.github.io/python_events/');
    });

    it("Fourth test - ID CSS Selector display menu", async ()=>{
        const element = await $('[id="success-stories"]')
        const dispElement = await element.isDisplayed();
        expect(await dispElement).toEqual(true);
    })
 
    it("Fifth test - ID CSS Selector and XPath click button and open link", async ()=>{
        await $('[id="events"]').click()
        const aLink = await $('/html/body/div/div[3]/div/aside/div/p[1]/a');
        expect(await aLink.getAttribute('href')).toHaveHref('http://lmorillas.github.io/python_events/');
    });
 })

//describe("Test suite - Homework 2", ()=>{

// it("First test", async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/");
//     const headerID = await $('#_header');
//     //console.log(await headerID.isExisting())
//     expect(await headerID.isExisting()).toEqual(true);
// });

// it("Second test", async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/")
//     await $('#_logo').click({
//         button: 0,
//         x:100
//     });
//     await browser.pause(10000);
//     const headerID = await $('/html/head')
//     expect(await headerID.getTitle()).toEqual('Wolfram: La unión entre la computación y el conocimiento');
// });

// it("Third test", async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/")
//     const iconSearch = await $('/html/body/header[1]/div[2]/nav/div[6]/a/i[2]').click();
//     await browser.pause(1000);
//     const valueSearch = await $('/html/body/header[1]/div[2]/nav/div[6]/ul/li/form/div/input');
//     await valueSearch.setValue('orthogonal')
//     await browser.pause(4000);
// });

// it("Fourth test", async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/")
//     const productIcon = await $('/html/body/header[1]/div[2]/nav/div[1]')
//     // console.log(await productIcon);
//     // await browser.pause(4000);
//     expect(await productIcon.isExisting()).toEqual(true);
// });

// it("Fifth test", async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/")
//     const navProd = await $('/html/body/header[1]/div[2]/nav')
//     const divProd = await navProd.$$('div')[1].$('a').isClickable()
//    // console.log(await divProd.isClickable());
//     expect(divProd).toEqual(false);
// });


// it("Sixth test", async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/")
//     const headerID = await $('/html/body/header[1]/div[1]');
//     //console.log(await headerID)
//     expect(await headerID.getProperty('id')).toEqual('_header-t');
// });
//})

// describe("Test suite - Homework 3", () => {
//     // it("First test", async () => {
//     //     await browser.url('https://www.kalley.com.co');
//     //     const input = await $('#js-site-search-input')
//     //     await browser.execute(
//     //         function (input) {
//     //             return input.value = "Computadoras"
//     //         }, input)
//     //     //await $('button#js-search-button').click();
//     //     browser.submitForm('form[name="search_form_SearchBox"]')
//     //     await browser.pause(10000)
//     // });

//     // it("Second Test - wait until", async () => {
//     //     await browser.url('https://www.youtube.com/');
//     //     await $("#guide-button").click();
//     //     await browser.waitUntil(
//     //         async () => await $(".style-scope.tp-yt-app-drawer.visible").isDisplayed(),
//     //         {timeout: 5000, interval: 600, timeoutMsg: "not loaded"}
//     //     );
//     // });

//     // it("Third Test ", async ()=>{
//     //     await browser.url('https://mousetester.com/');
//     //     const clicks = await $('#clickMe');
//     //     await clicks.doubleClick();
//     //     await browser.pause(5000)
//     // });

//     // it('Fourth Test', async () => {
//     //     await browser.url('https://www.e-education.psu.edu/geog777/h5p/embed/1950');
//     //     const elem = await $('.h5p-hidden-read');
//     //     const target = await $('.h5p-inner.ui-droppable');
//     //     await browser.pause(3000)
//     //     await elem.dragAndDrop(target);
//     //     await browser.pause(10000)
//     // })

//     // it('Fifth Test', async () => {
//     //     await browser.url('https://www.fisicalab.com/tema/optica-geometrica');
//     //     await browser.setCookies({
//     //         name: 'test1',
//     //         value: 'Galletita Uno!'
//     //     })
//     //     const cookies = await browser.getCookies('test1')
//     //     console.log(cookies);
//     // });

//     // it('Fifth Test', async () => {
//     //     const key = "localStorageKey";
//     //     const value = "localStorageValue";
        
//     //     await browser.execute(function (key, value) {
//     //         window.localStorage.setItem(key, value);
//     //     }, key, value);
//     //     const readValue = await browser.execute(function (key) {
//     //         return window.localStorage.getItem(key);
//     //     }, key);
//     //     console.log(readValue);
//     //     expect (readValue).toEqual('localStorageValue')
//     // });
// })