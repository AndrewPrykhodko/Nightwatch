module.exports = {
  "src_folders": [
    "./src-test/suites" // Where you are storing your Nightwatch e2e/UAT tests
  ],

  "output_folder": "./reports", // reports (test outcome) output by nightwatch

  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": false, // tells nightwatch to start/stop the selenium process
    "server_path": "node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "default_path_prefix": "/wd/hub",
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver" : "/usr/local/bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "test_runner" : {
       "type" : "mocha",
     },
     "launch_url": "http://localhost:8080",
     "globals" : {
       "waiterTime" : 30000,
       "waiterPageLoad": 2000,
     },
     "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome",
          "chromeOptions": {
              "w3c": false
            }
      }
    },
  }
}
