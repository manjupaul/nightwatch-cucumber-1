const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

const jupiter = client.page.jupiterUserHomePage()

defineSupportCode(({Given, Then, When, And}) => {

    When(/^I click the user Menu$/, () => {
        return jupiter
            .selectUserMenu()
    })

    Then (/^I should be able to see the welcome ([^"]*) message$/, (username) => {
        return jupiter
            .waitForElementVisible('@welcomeMessage', 2000)
            .assert.containsText('@welcomeMessage', "Welcome "+ username)
    })

})