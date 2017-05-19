import Ember from 'ember';

const {
  Service,
} = Ember;

const Companies = {
  PATH: '/maps/companies.csv'
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
