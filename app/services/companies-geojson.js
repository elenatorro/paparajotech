import Ember from 'ember';

const {
  Service,
} = Ember;

const Companies = {
  PATH: '/maps/companies.json'
};

export default Service.extend({
  getGeoJSON() {
    return fetch(Companies.PATH)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log({error});
      });
  }
});
