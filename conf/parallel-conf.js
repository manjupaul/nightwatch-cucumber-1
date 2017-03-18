// const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')

require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js', '--require', 'hooks.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', 'features']
})

nightwatch_config = {
    src_folders : "",
    output_folder : "reports",
    custom_commands_path : "CustomCommands",
    custom_assertions_path : "",
    page_objects_path: ["JupiterPageObjects"],
    globals_path : "",

    selenium : {
        "start_process" : false,
        "host": "ondemand.saucelabs.com",
        "port": 80
    },

    test_workers: {
        "enabled": true,
        "workers": "auto"
    },

    test_settings : {
        default : {
            silent: true,
            output: true,
            selenium_host: "ondemand.saucelabs.com",
            selenium_port: 80,
            username: "$SAUCE_USERNAME",
            access_key: "SAUCE_ACCESSKEY",
            desiredCapabilities: {
                browserName: "chrome",
                platform: "Windows 10",
                version: "48"
            }
        },
        ie11 : {
            desiredCapabilities: {
                browserName: "internet explorer",
                platform: "Windows 10",
                version: "11.0",
                name: "IE Tests",
                shardTestFiles: true,
                maxInstances: 25
            }
        },
        safari : {
            desiredCapabilities: {
                browserName: "safari",
                platform: "OS X 10.11",
                version: "9.0"
            }
        },
        edge : {
            desiredCapabilities: {
                browserName: "MicrosoftEdge",
                platform: "Windows 10",
                version: "13.10586"
            }
        },
        ffox : {
            desiredCapabilities: {
                browserName: "firefox",
                platform: "Linux",
                version: "45.0",
                name: "Firefox Tests",
                shardTestFiles: true,
                maxInstances: 25
            }
        },
        ios : {
            desiredCapabilities: {
                browserName: "Safari",
                platformVersion: "9.3",
                platformName: "iOS",
                deviceName : "iPhone 6s Simulator",
                deviceOrientation: "portrait"
            }
        }
    }
};

module.exports = nightwatch_config;
