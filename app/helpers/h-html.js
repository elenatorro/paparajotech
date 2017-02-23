import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    let htmlText = params[0];
    return Ember.String.htmlSafe(htmlText);
  }
});
