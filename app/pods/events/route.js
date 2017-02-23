import Ember from 'ember';

const {
  Route,
  inject: { service },
} = Ember;

export default Route.extend({
  meetupApiS: service('meetupApi'),
  
  model() {
    return this.get('meetupApiS').getEvents();
  }
});
