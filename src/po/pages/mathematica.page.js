class MathematicaPage {

async open() {
  await browser.url("https://www.wolfram.com/mathematica/");
 }
}

module.exports = MathematicaPage;