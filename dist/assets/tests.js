'use strict';

define('paparajotech/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('paparajotech/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('paparajotech/tests/constants/api.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/api.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/api.js should pass jshint.');
  });
});
define('paparajotech/tests/constants/forms.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/forms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/forms.js should pass jshint.');
  });
});
define('paparajotech/tests/constants/locales.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/locales.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/locales.js should pass jshint.');
  });
});
define('paparajotech/tests/constants/meetup-events.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/meetup-events.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/meetup-events.js should pass jshint.');
  });
});
define('paparajotech/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('paparajotech/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('paparajotech/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('paparajotech/tests/helpers/h-html.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/h-html.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/h-html.js should pass jshint.');
  });
});
define('paparajotech/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'paparajotech/tests/helpers/start-app', 'paparajotech/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _paparajotechTestsHelpersStartApp, _paparajotechTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _paparajotechTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _paparajotechTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('paparajotech/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('paparajotech/tests/helpers/resolver', ['exports', 'paparajotech/resolver', 'paparajotech/config/environment'], function (exports, _paparajotechResolver, _paparajotechConfigEnvironment) {

  var resolver = _paparajotechResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _paparajotechConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _paparajotechConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('paparajotech/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('paparajotech/tests/helpers/setup-games', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {

  function setupGames(appInstance) {
    try {
      appInstance.container.lookup('service:i18n').set('locale', 'en');
      appInstance.registry.register('helper:t', _emberI18nHelper['default']);
    } catch (reason) {
      console.warn({ reason: reason });
    }
  }

  exports['default'] = setupGames;
});
define('paparajotech/tests/helpers/setup-games.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/setup-games.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/setup-games.js should pass jshint.');
  });
});
define('paparajotech/tests/helpers/start-app', ['exports', 'ember', 'paparajotech/app', 'paparajotech/config/environment'], function (exports, _ember, _paparajotechApp, _paparajotechConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _paparajotechConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _paparajotechApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('paparajotech/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('paparajotech/tests/helpers/store', ['exports', 'ember', 'ember-data', 'paparajotech/tests/helpers/owner'], function (exports, _ember, _emberData, _paparajotechTestsHelpersOwner) {
  exports['default'] = setupStore;
  exports.createStore = createStore;

  function setupStore(options) {
    var container, registry, owner;
    var env = {};
    options = options || {};

    if (_ember['default'].Registry) {
      registry = env.registry = new _ember['default'].Registry();
      owner = _paparajotechTestsHelpersOwner['default'].create({
        __registry__: registry
      });
      container = env.container = registry.container({
        owner: owner
      });
      owner.__container__ = container;
    } else {
      container = env.container = new _ember['default'].Container();
      registry = env.registry = container;
    }

    env.replaceContainerNormalize = function replaceContainerNormalize(fn) {
      if (env.registry) {
        env.registry.normalize = fn;
      } else {
        env.container.normalize = fn;
      }
    };

    var adapter = env.adapter = options.adapter || '-default';
    delete options.adapter;

    if (typeof adapter !== 'string') {
      env.registry.register('adapter:-ember-data-test-custom', adapter);
      adapter = '-ember-data-test-custom';
    }

    for (var prop in options) {
      registry.register('model:' + _ember['default'].String.dasherize(prop), options[prop]);
    }

    registry.optionsForType('serializer', { singleton: false });
    registry.optionsForType('adapter', { singleton: false });
    registry.register('adapter:-default', _emberData['default'].Adapter);

    registry.register('serializer:-default', _emberData['default'].JSONSerializer);
    registry.register('serializer:-rest', _emberData['default'].RESTSerializer);

    registry.register('adapter:-rest', _emberData['default'].RESTAdapter);

    registry.register('adapter:-json-api', _emberData['default'].JSONAPIAdapter);
    registry.register('serializer:-json-api', _emberData['default'].JSONAPISerializer);

    env.restSerializer = container.lookup('serializer:-rest');
    env.store = container.lookup('service:store');
    env.serializer = env.store.serializerFor('-default');
    env.adapter = env.store.get('defaultAdapter');

    return env;
  }

  exports.setupStore = setupStore;

  function createStore(options) {
    return setupStore(options).store;
  }
});
define('paparajotech/tests/helpers/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/store.js should pass jshint.');
  });
});
define('paparajotech/tests/integration/components/change-locale-test', ['exports', 'ember-qunit', 'paparajotech/locales/en/translations', 'paparajotech/locales/es/translations'], function (exports, _emberQunit, _paparajotechLocalesEnTranslations, _paparajotechLocalesEsTranslations) {

  (0, _emberQunit.moduleForComponent)('pt-change-locale', 'Integration | Component | pt-change-locale', {
    integration: true
  });

  (0, _emberQunit.test)('it should be able to change the locale', function (assert) {
    var _localesList, _changeToEnglishButton, _changeToSpanishButton;

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'pt-change-locale', ['loc', [null, [1, 0], [1, 20]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    _localesList = this.$('ul').eq(0);
    _changeToEnglishButton = this.$('li a').eq(0);
    _changeToSpanishButton = this.$('li a').eq(1);

    assert.ok(_localesList, 'it should display the locales button list');
    assert.ok(_changeToEnglishButton, 'it should have a button to switch to English');
    assert.ok(_changeToSpanishButton, 'it should have a button to switch to Spanish');

    assert.ok(_changeToEnglishButton.text().trim(), _paparajotechLocalesEnTranslations['default'].components.changeLocale.english);
    assert.ok(_changeToSpanishButton.text().trim(), _paparajotechLocalesEnTranslations['default'].components.changeLocale.spanish);

    _changeToSpanishButton.click();

    assert.ok(_changeToEnglishButton.text().trim(), _paparajotechLocalesEsTranslations['default'].components.changeLocale.english);
    assert.ok(_changeToSpanishButton.text().trim(), _paparajotechLocalesEsTranslations['default'].components.changeLocale.spanish);

    _changeToEnglishButton.click();
    assert.ok(_changeToEnglishButton.text().trim(), _paparajotechLocalesEnTranslations['default'].components.changeLocale.english);
    assert.ok(_changeToSpanishButton.text().trim(), _paparajotechLocalesEnTranslations['default'].components.changeLocale.spanish);
  });
});
define('paparajotech/tests/integration/components/change-locale-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/change-locale-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/change-locale-test.js should pass jshint.');
  });
});
define('paparajotech/tests/locales/en/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass jshint.');
  });
});
define('paparajotech/tests/locales/es/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | locales/es/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/es/translations.js should pass jshint.');
  });
});
define('paparajotech/tests/locales/murciano/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | locales/murciano/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/murciano/translations.js should pass jshint.');
  });
});
define('paparajotech/tests/models/company.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/company.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/company.js should pass jshint.');
  });
});
define('paparajotech/tests/models/event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/event.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/companies/company/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/companies/company/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/companies/company/route.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/companies/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/companies/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/companies/route.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/components/pt-change-locale/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/pt-change-locale/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pt-change-locale/component.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/components/pt-event-card/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/pt-event-card/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pt-event-card/component.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/components/pt-leaflet-tech-map/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/pt-leaflet-tech-map/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pt-leaflet-tech-map/component.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/components/pt-nav-bar-collapse-button/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/pt-nav-bar-collapse-button/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pt-nav-bar-collapse-button/component.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/components/pt-nav-bar-dropdown-button/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/pt-nav-bar-dropdown-button/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pt-nav-bar-dropdown-button/component.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/components/pt-nav-bar/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/pt-nav-bar/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pt-nav-bar/component.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/components/pt-popup/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/pt-popup/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/pt-popup/component.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/contact/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/contact/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/contact/route.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/events/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/events/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/events/route.js should pass jshint.');
  });
});
define('paparajotech/tests/pods/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass jshint.');
  });
});
define('paparajotech/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('paparajotech/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('paparajotech/tests/services/companies-geojson.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/companies-geojson.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/companies-geojson.js should pass jshint.');
  });
});
define('paparajotech/tests/services/meetup-api.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/meetup-api.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/meetup-api.js should pass jshint.');
  });
});
define('paparajotech/tests/services/route-model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/route-model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/route-model.js should pass jshint.');
  });
});
define('paparajotech/tests/test-helper', ['exports', 'paparajotech/tests/helpers/resolver', 'ember-qunit'], function (exports, _paparajotechTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_paparajotechTestsHelpersResolver['default']);
});
define('paparajotech/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('paparajotech/tests/transforms/object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transforms/object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/object.js should pass jshint.');
  });
});
define('paparajotech/tests/unit/components/change-locale-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('pt-change-locale', 'Unit | Component | pt-change-locale', {
    needs: ['service:i18n'],
    unit: true
  });

  (0, _emberQunit.test)('it should render', function (assert) {
    var _component = this.subject();
    assert.ok(_component);
  });
});
define('paparajotech/tests/unit/components/change-locale-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/change-locale-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/change-locale-test.js should pass jshint.');
  });
});
define('paparajotech/tests/unit/routes/application-test', ['exports', 'ember', 'ember-qunit', 'paparajotech/tests/helpers/start-app'], function (exports, _ember, _emberQunit, _paparajotechTestsHelpersStartApp) {

  var App, AppInstance, ApplicationRoute;

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    needs: ['service:route', 'service:store', 'service:api', 'service:i18n'],

    beforeEach: function beforeEach() {
      App = (0, _paparajotechTestsHelpersStartApp['default'])();
      AppInstance = App.buildInstance();
      ApplicationRoute = this.subject();
    },
    afterEach: function afterEach() {
      _ember['default'].run(App, 'destroy');
    }
  });

  (0, _emberQunit.test)('it should have an application route', function (assert) {
    assert.ok(ApplicationRoute, 'it should have an application route');
  });
});
define('paparajotech/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define("paparajotech/tests/unit/utils/utils", ["exports"], function (exports) {});
define('paparajotech/tests/unit/utils/utils.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/utils.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/utils.js should pass jshint.');
  });
});
define('paparajotech/tests/utils/array-utils.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/array-utils.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/array-utils.js should pass jshint.');
  });
});
define('paparajotech/tests/utils/meetup-api-key-sample.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/meetup-api-key-sample.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/meetup-api-key-sample.js should pass jshint.');
  });
});
define('paparajotech/tests/utils/meetup-api-key.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/meetup-api-key.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/meetup-api-key.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('paparajotech/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
