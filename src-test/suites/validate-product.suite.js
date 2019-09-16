const Products = require('../facade/products.facade');
const Create = require('../facade/create.facade');
const R = require('ramda');
const [
  emptyName,
  emptyDescription,
  longName,
  longDescription,
] = require('../data/validate-products');

const errorList = R.transpose([
  [
    emptyName,
    emptyDescription,
    longName,
    longDescription,
  ], [
    'requiredName',
    'requiredDescription',
    'exceedingName',
    'exceedingDescription',
  ]
])

errorList.map(([product, validate]) => describe(`validate product -> ${product.name}`, function() {
    before(async (browser, done) => {
      await browser.url(browser.launchUrl);
      done();
    });

    Products.openCreatePage();
    Create.newProduct(product);
    Create[validate]();
}));
