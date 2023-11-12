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

// describe("Homework 1 - Testing at least 4 scenarios trying to use both XPath and CSS selectors", ()=>{
//     beforeEach(async ()=>{
//         await browser.url("https://www.python.org/");
//     })
//     it("First test - WebPage is working right", async ()=>{
//         const pageTitle = await browser.getTitle();
//         expect(pageTitle).toEqual("Welcome to Python.org")
//     });
//     it("Second test - ID CSS Selector", async ()=>{
//         const aText = await $("[id='news']");
//         expect(await aText.getText()).toEqual('News');
//     });
//     it("Third test - ID CSS Selector and XPath", async ()=>{
//         await $('[id="events"]').click()
//         const aLink = await $('/html/body/div/header/div/nav/ul/li[7]/a');
//         expect(await aLink.getAttribute('href')).toHaveHref('http://lmorillas.github.io/python_events/');
//     });

//     it("Fourth test - ID CSS Selector display menu", async ()=>{
//         const element = await $('[id="success-stories"]')
//         const dispElement = await element.isDisplayed();
//         expect(await dispElement).toEqual(true);
//     })

//     it("Fifth test - ID CSS Selector and XPath click button and open link", async ()=>{
//         await $('[id="events"]').click()
//         const aLink = await $('/html/body/div/div[3]/div/aside/div/p[1]/a');
//         expect(await aLink.getAttribute('href')).toHaveHref('http://lmorillas.github.io/python_events/');
//     });
//  })

// describe("Test suite - Homework 2", ()=>{

// beforeEach(async ()=>{
//     await browser.url("https://www.wolfram.com/mathematica/");
// });

// it("First test - Using command isExisting() to check the Header", async ()=>{
//     const headerID = await $('#_header');
//     expect(await headerID.isExisting()).toEqual(true);
// });

// it("Second test - Testing more options for click command and verifiying webpage title", async ()=>{
//     await $('#_logo').click({
//         button: 0,
//         x:100
//     });
//     await browser.pause(10000)
//     const headerID = await $('head')
//     expect(await headerID.getTitle()).toEqual('Wolfram: La unión entre la computación y el conocimiento');
// });

// it("Third test - Search a value, display results and verifiying first results contains search word", async ()=>{
//     // Click to the search bar
//     await $('#_nav-search').$('._nav-l1').$('._icon-r1-c3.hide__600').click();
//     const valueSearch = await $('#_nav-search').$('.no-bfc').$('#_search-input');
//     // Setting value
//     await valueSearch.setValue('orthogonal');
//     await valueSearch.addValue('\uE007');
//     // Getting first result and comparing no matter upper or lower case
//     const resultsContainer = await $('#main').$('.column_box');
//     const firstResult = await resultsContainer.$('.search_result_title');
//     const textOriginal = await firstResult.getText();
//     const lowerCaseText = textOriginal.toLowerCase();
//     expect(await lowerCaseText.includes('orthogonal')).toEqual(true);
// });

// // it("Fourth test - Using IsExisting() again", async ()=>{
// //     const productIcon = await $('/html/body/header[1]/div[2]/nav/div[1]')
// //     expect(await productIcon.isExisting()).toEqual(true);
// // });

// it("Fifth test - Verifying that Logo page is a clickable element", async ()=>{
//     const navProd = await $('#_header-b').$('.cf.display-b');
//     const divProd = await navProd.isClickable();
//     expect(divProd).toEqual(true);
// });

// // it("Sixth test - Header has ID property", async ()=>{
// //     const headerID = await $('/html/body/header[1]/div[1]');
// //     expect(await headerID.getProperty('id')).toEqual('_header-t');
// // });
// })

describe("Test suite - Homework 3", () => {
    // it("First test - Using Execute command ", async () => {
    //     await browser.url('https://www.wolfram.com/mathematica/');
    //     await $('#_nav-search').$('._nav-l1').$('._icon-r1-c3.hide__600').click();
    //     const input = await $('#_nav-search').$('.no-bfc').$('#_search-input');
    //     await browser.execute(
    //         function (input) {
    //             input.value = 'eigenvalue';
    //             return input
    //         }, input);
    //     await input.addValue('\uE007');
    //     // Getting first result and comparing no matter upper or lower case
    //     const resultsContainer = await $('#main').$('.column_box');
    //     const firstResult = await resultsContainer.$('.search_result_title');
    //     const textOriginal = await firstResult.getText();
    //     const lowerCaseText = textOriginal.toLowerCase();
    //     expect(await lowerCaseText.includes('eigenvalue')).toEqual(true);
    // });

    // it("Second Test - Using wait until to verify a displaying element", async () => {
    //     await browser.url('https://www.youtube.com/');
    //     await $("#guide-button").click();
    //     const menu = await browser.waitUntil(
    //         async () => await $(".style-scope.tp-yt-app-drawer.visible").isDisplayed(),
    //         {timeout: 5000, interval: 600, timeoutMsg: "not loaded"}
    //     );
    //     expect(await menu).toEqual(true, "Side menu is not displayed")
    // });

    // it("Third Test - Webpage counts double click on canvas", async () => {
    //     await browser.url('https://mousetester.com/');
    //     const clicks = await $('#clickMe');
    //     await clicks.doubleClick();
    //     const counter = await $('#button_0_double')
    //     const clicksCounter = await counter.getText();
    //     expect(parseInt(clicksCounter)).toEqual(1, 'the double click is not executed');

    // });

    // it('Fourth Test - Drag and drop and specific element', async () => {
    //     await browser.url('https://www.e-education.psu.edu/geog777/h5p/embed/1950');
    //     const elem = await $('.h5p-hidden-read');
    //     const target = await $('.h5p-inner.ui-droppable');
    //     await elem.dragAndDrop(target);const droppedText = await $('.h5p-draggable.ui-draggable.ui-draggable-handle.h5p-advanced-text.h5p-dropped');
    //     expect(await droppedText.isExisting()).toEqual(true);
    // })

    it('Fifth Test - Setting and getting cookies on webPage', async () => {
        await browser.url('https://www.fisicalab.com/tema/optica-geometrica');
        await browser.setCookies({
            name: 'test1',
            value: 'Galletita Uno!'
        })
        const cookies = await browser.getCookies('test1')
        const cookieValue = cookies[0].value;
        expect(cookieValue).toEqual('Galletita Uno!')
    });

    it('Sixth Test - testing Local Storage', async () => {
        const key = "myLocalStorage";
        const value = "Datos random que quiero guardar";

        await browser.execute(function (key, value) {
            window.localStorage.setItem(key, value);
        }, key, value);

        const readValue = await browser.execute(function (key) {
            return window.localStorage.getItem(key);
        }, key);
        
        //console.log(readValue);
        expect (readValue).toEqual('Datos random que quiero guardar')
    });
})