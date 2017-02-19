import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('change-locale', 'Unit | Component | change-locale', {
  needs: ['service:i18n'],
  unit: true
});

test('it should render', function(assert) {
  let _component = this.subject();
  assert.ok(_component);
});
