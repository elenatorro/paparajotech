import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  onDidTransition: Ember.on('didTransition', function() {
    this.set('currentRoute', arguments[0]);
  })
});

Router.map(function() {
  this.route('admin');
  this.route('index', {path: '/'});
  this.route('contact');
  this.route('events');
  this.route('companies', function() {
    this.route('company', {path: '/:company_id'});
  });
});

export default Router;
