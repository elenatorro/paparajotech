import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  companiesGeojsonS: Ember.inject.service('companiesGeojson'),

  model() {
    return this.get('companiesGeojsonS').getGeoJSON();
  }
});
