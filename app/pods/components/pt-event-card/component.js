import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pt-event-card', 'card', 'horizontal'],

  tagName: 'article',

  meetupEvent: null,

  eventDateFormat: 'DD MMM YYYY',

  eventDateTimestamp: 'x', // Unix Timestamp

  init() {
    this._super(arguments);
  }
});
