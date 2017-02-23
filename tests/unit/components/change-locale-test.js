import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('pt-change-locale', 'Unit | Component | pt-change-locale', {
  needs: ['service:i18n'],
  unit: true
});

test('it should render', function(assert) {
  let _component = this.subject();
  assert.ok(_component);
});
