var jupiterContactPageCommands = {

    submitContactDetails: function() {
        return this
            .waitForElementVisible('@contactSubmit', 1000)
            .click('@contactSubmit')
    },

    enterForename: function(forename){
        return this
            .waitForElementVisible('@forename', 1000)
            .setValue('@forename',forename)
    },

    enterEmail: function(email){
        return this
            .waitForElementVisible('@email', 1000)
            .setValue('@email',email)
    },

    enterTelNum: function(telephone){
        return this
            .waitForElementVisible('@telephone', 1000)
            .setValue('@telephone',telephone)
    },

    enterMessage: function(message){
        return this
            .waitForElementVisible('@message', 1000)
            .setValue('@message',message)
    },

}

module.exports = {
    commands: [jupiterContactPageCommands],
    elements: {
        body:           'body',
        contactSubmit:  "a[class='btn-contact btn btn-primary']",
        forenameErr :   '#forename-err',
        emailErr:       '#email-err',
        messageErr :    '#message-err',
        telephoneErr:   '#telephone-err',
        successmessage: '.alert.alert-success',
        forename:       '#forename',
        email :         '#email',
        telephone:   '#telephone',
        message:        '#message'
    }
}
