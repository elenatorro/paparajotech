import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['button-collapse', 'hide-on-large-only', 'right'],

  attributeBindings: ['dataActivates:data-activates', 'role', 'href'],

  tagName: 'a',

  dataActivates: 'pt-nav-bar__side-bar',

  role: 'button',

  href: '#',

  didInsertElement() {
    this.$().sideNav();
  }
});
