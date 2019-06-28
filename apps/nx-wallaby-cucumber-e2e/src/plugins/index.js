const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor'); // ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// module.exports = (on: Cypress.Actions, config: Cypress.ConfigOptions) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// };
var path = require('path');
var wp = require('@cypress/webpack-preprocessor');
var cucumber = require('cypress-cucumber-preprocessor')['default'];
module.exports = function(on, config) {
  console.log('moooooooeeoqwoooo', path.join(__dirname, 'webpack-cypress.js'));
  var options = {
    webpackOptions: '../webpack-cypress.js'
  };
  on('file:preprocessor', function() {
    console.log('boooooooOOOOOOOOOO');
  });
  on('file:preprocessor', wp(options));
  on('file:preprocessor', cucumber());
  on('file:preprocessor', preprocessTypescript(config));
};
