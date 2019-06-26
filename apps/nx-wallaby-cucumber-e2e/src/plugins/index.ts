// ***********************************************************
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
const path = require('path');
const wp = require('@cypress/webpack-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = (on, config) => {
  console.log(
    'moooooooeeoqwoooo', path.join(__dirname, 'webpack-cypress.js')
  );
  const options = {
    webpackOptions: '../webpack-cypress.js',
  };
  on('file:preprocessor', () => {
    console.log('boooooooOOOOOOOOOO')
  });
  on('file:preprocessor', wp(options));
  on('file:preprocessor', cucumber())
};

