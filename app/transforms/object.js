import Ember from 'ember';
import DS from 'ember-data';

const {
  isNone
} = Ember;

const {
  Transform
} = DS;

export default Transform.extend({

  deserialize(serialized) {
    if (isNone(serialized)) {
      return  {};
    } else {
      return serialized;
    }
  },

  serialize(deserialized) {
    if (isNone(deserialized)) {
      return {};
    } else {
      return deserialized;
    }
  }

});
