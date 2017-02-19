import E from 'ember';
import {moduleFor, test} from 'ember-qunit';
import startApp from 'paparajotech/tests/helpers/start-app';

var App, AppInstance, ApplicationRoute;

moduleFor('route:application', 'Unit | Route | application', {
  needs: ['service:route', 'service:store', 'service:api', 'service:i18n'],

  beforeEach() {
    App              = startApp();
    AppInstance      = App.buildInstance();
    ApplicationRoute = this.subject();
  },
  afterEach() {
    E.run(App, 'destroy');
  }
});

test('it should have an application route', function(assert) {
  assert.ok(ApplicationRoute, 'it should have an application route');
});
