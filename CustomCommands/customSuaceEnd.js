exports.command = function(result) {
    var SauceLabs = require("saucelabs");

    var saucelabs = new SauceLabs({
        username: '$SAUCE_USERNAME',
        password: '$SAUCE_ACCESSKEY'
    });

    var sessionid = this.capabilities['webdriver.remote.sessionid'];
    var jobName = this.currentTest.name;

    saucelabs.updateJob(sessionid, {
        passed: this.currentTest.results.failed === 0,
        name: jobName
    }, function() {});

    console.log("SauceOnDemandSessionID=" + sessionid + " job-name=" + jobName);
    this.end();
};