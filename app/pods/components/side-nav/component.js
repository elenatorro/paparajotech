import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['side-nav', 'collapsible', 'grey', 'lighten-3'],

  attributeBindings: ['toggleId:data-activates'],

  tagName: 'section',

  toggleId: 'side-nav-toggle'
});
