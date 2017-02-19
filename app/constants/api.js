import config from 'paparajotech/config/environment';

export const RequestURLS = Object.freeze({
  Companies: {
    GetCards: Object.freeze({
      METHOD: 'GET',
      URL:    `${config.apiURL}/companies`,
      HEADERS: Object.freeze({
        'Content-Type': 'application/json',
      })
    })
  }
});

export const ResponseStatus = Object.freeze({
  200: 'success',
  404: 'notFound'
});
