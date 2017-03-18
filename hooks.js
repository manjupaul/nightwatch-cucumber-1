var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};