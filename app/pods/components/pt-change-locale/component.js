import Ember from 'ember';
import { Locales } from 'paparajotech/constants/locales';

export default Ember.Component.extend({
  i18nService: Ember.inject.service('i18n'),

  classNames: ['pt-change-locale'],

  tagName: 'ul',

  locales: ['EN', 'ES'],

  localesLocale: Ember.computed('locales', function() {
    return this.get('locales').map((locale) => {
      return {
        lang: locale,
        translation: `components.changeLocale.template.${locale}`
      };
    });
  }),

  actions: {
    changeTo(locale) {
      if (!!Locales[locale]) {
        this.set('i18nService.locale', locale);
      }
    }
  }
});
