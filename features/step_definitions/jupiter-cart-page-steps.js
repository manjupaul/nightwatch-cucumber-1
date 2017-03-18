const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When, And}) => {

    Given(/^the cart count should be ([^"]*)$/, (cart_count) => {
        return client
            .page.jupiterCartPage().assert.containsText("@cartcount", cart_count)
    })

})