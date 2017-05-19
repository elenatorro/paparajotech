import Ember from 'ember';
import { Env } from 'config/environment';

const {
  Service,
} = Ember;

const Companies = {
  PATH: Env.environment === 'production'
    ? 'https://github.com/elenatorro/paparajotech/blob/master/public/maps/companies.csv'
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
