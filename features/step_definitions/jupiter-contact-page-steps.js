const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

const jupiter = client.page.jupiterContactPage()


defineSupportCode(({Given, Then, When, And}) => {

    When(/^I click on submit$/, () => {
        return jupiter
            .submitContactDetails()
    })

    Then(/^I should see the mandatory field error messages$/, () => {
        return jupiter
            .assert.containsText('@forenameErr',"Forename is required")
            .assert.containsText('@emailErr',"Email is required")
            .assert.containsText('@messageErr',"Message is required")

    })

    Then(/^I should see the validation error messages$/, () => {
        return jupiter
            .assert.containsText('@emailErr',"Please enter a valid email")
            .assert.containsText('@telephoneErr',"Please enter a valid telephone number")

    })

    Then(/^I should see successful message$/, () => {
        return jupiter
            .waitForElementVisible('@successmessage', 20000)
            .assert.containsText('@successmessage',"Thanks Dan, we appreciate your feedback.")

    })

    When(/^I enter the values for ([^"]*), ([^"]*), ([^"]*) and ([^"]*) fields$/, (username, email, phonenum, message) => {
        return jupiter
            .enterForename(username)
            .enterEmail(email)
            .enterTelNum(phonenum)
            .enterMessage(message)
    })

    Then(/^I should not see the mandatory field error messages$/, () => {
        return jupiter
            .assert.elementNotPresent('@forenameErr')
            .assert.elementNotPresent('@emailErr')
            .assert.elementNotPresent('@messageErr')

    })

})