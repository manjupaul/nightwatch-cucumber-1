const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

const jupiter = client.page.jupiterLoginPage()

defineSupportCode(({Given, Then, When, And}) => {

    When(/^I Enter ([^"]*) and ([^"]*)$/, (username, password) => {
        return jupiter
            .enterUserName(username)
            .enterPassword(password)
    })

    When(/^I click the Login button$/, () => {
        return jupiter
            .submit()
    })

    Then (/^Login should not be succesful$/, () => {
        return jupiter
            .waitForElementVisible('@loginError', 2000)
            .assert.containsText('@loginError', "Your login details are incorrect")
    })

})