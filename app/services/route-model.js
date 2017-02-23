import E from 'ember';

export default E.Service.extend({
  meetupApiS: E.inject.service('meetupApi'),
  storeS: E.inject.service('store'),

  companiesGeoJSON() {
    return this.get('store').findRecord('user', 1234 );
  },
});
