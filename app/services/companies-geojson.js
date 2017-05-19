import Ember from 'ember';
import ENV from 'paparajotech/config/environment';

const {
  Service,
} = Ember;

const Companies = {
  PATH: ENV.environment === 'production' ?
    'https://raw.githubusercontent.com/elenatorro/paparajotech/master/public/maps/companies.csv'
    : '/maps/companies.csv'
};

export default Service.extend({
  getGeoJSON() {
    return fetch(Companies.PATH)
      .then((response) => {
        return response.text();
      })
      .catch((error) => {
        console.log({error});
      });
  }
});
