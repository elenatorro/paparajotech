import tHelper from 'ember-i18n/helper';

function setupGames(appInstance) {
  try {
    appInstance.container.lookup('service:i18n').set('locale', 'en');
    appInstance.registry.register('helper:t', tHelper);
  } catch(reason) {
    console.warn({reason});
  }
}

export default setupGames;
