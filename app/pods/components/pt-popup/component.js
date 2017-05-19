import Ember from 'ember';
import ENV from 'paparajotech/config/environment';

const {
  Component
} = Ember;

export default Component.extend({
  company: null,
  rootURL: ENV.rootURL
});
