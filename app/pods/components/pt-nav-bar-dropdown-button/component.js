import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  attributeBindings: ['dataActivates:data-activates', 'role', 'href'],

  tagName: 'a',

  dataActivates: 'pt-nav-bar__dropdown',

  role: 'button',

  href: '#!',

  didInsertElement() {
    this.$().dropdown();
  }
});
