import Ember from 'ember';
import ENV from 'paparajotech/config/environment';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['pt-nav-bar'],

  tagName: 'nav',

  logoImage: `${ENV.rootURL}assets/images/logo.png`,

  actions: {
    goToIndex() {
      this.sendAction('on-go-to-index');
    }
  }
});
