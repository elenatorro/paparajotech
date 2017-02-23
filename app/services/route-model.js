import Ember from 'ember';

export default Ember.Service.extend({
  meetupApiS: Ember.inject.service('meetupApi'),

  storeS: Ember.inject.service('store'),

  companiesGeoJSON() {
    // TODO
  },
});
