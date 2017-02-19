/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'paparajotech',
    podModulePrefix: 'paparajotech/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {},
    useApi: true,
    APP: {}
  };

  if (environment === 'development') {
    ENV.apiURL = 'http://localhost:4200/api';
    ENV.useApi = false;
  }

  if (environment === 'test') {
    ENV.apiURL = 'http://localhost:4200/api';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.useApi = false;
  }

  if (environment === 'production') {
    ENV.rootURL = '/paparajotech-ember/';
    ENV.apiURL = 'paparajotech-ember/api';
    ENV.useApi = false;
  }

  return ENV;
};
