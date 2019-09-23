const Q = require('q');

const displayed = (browser, {ELEMENT}) =>
  new Promise((resolve, reject) => {
    browser.elementIdDisplayed(ELEMENT, function (result, err) {
      resolve(result.value);
      reject(err);
    })
  });

const waitElementsVisible = (browser, arrElements) =>
  new Promise(async (resolve, reject) => {
  const arrDisp = await Promise.all(arrElements.map(el =>
    displayed(browser, el)
  ));
  if(arrDisp.every(state => state === true)) resolve(true);
  else await Q.delay(1000)
    .then(waitElementsVisible(browser, arrElements));
})


module.exports = {
  elements: (browser, {selector, locateStrategy}) =>
  new Promise((resolve, reject) => {
      browser.elements(locateStrategy, selector, function (result, err) {
        resolve(result.value);
        reject(err);
      })
    }),
  getText: (browser, {ELEMENT}) =>
    new Promise((resolve, reject) => {
      browser.elementIdText(ELEMENT, function (result, err) {
        resolve(result.value);
        reject(err);
      })
    }),
  displayed: (browser, {ELEMENT}) =>
    new Promise((resolve, reject) => {
      browser.elementIdDisplayed(ELEMENT, function (result, err) {
        resolve(result.value);
        reject(err);
      })
    }),
  waitAllVisible: (browser, arrElements) =>
    waitElementsVisible(browser, arrElements),
}
