import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    goToIndex() {
      this.transitionTo('index');
    }
  }
});
