import Ember from 'ember';
import LeafletMap from 'ember-leaflet/components/leaflet-map';
import csv2geojson from 'npm:csv2geojson';
import ENV from 'paparajotech/config/environment';

const MurciaCoords = Object.freeze({
  LAT: 38.086240,
  LNG: -1.213506,
  ZOOM: 9
});

export default LeafletMap.extend({
  classNames: ['pt-leaflet-tech-map'],

  tagName: 'section',

  csv: null,

  geoJSON: Ember.computed('csv', function() {
    csv2geojson.csv2geojson(this.get('csv'), (error, data) => {
      this.set('geoJSON', data);
    });
  }),

  companies: Ember.computed('geoJSON.features', function() {
    this.get('geoJSON');

    if (this.get('geoJSON.features')) {
      return this.get('geoJSON.features').map((company) => {
        let [lat, lng] = company.geometry.coordinates;
        company.geometry.coordinates = [lng, lat];
        return company;
      });
    }

    return false;
  }),

  lat: MurciaCoords.LAT,

  lng: MurciaCoords.LNG,

  zoom: MurciaCoords.ZOOM,

  scrollWheelZoom: false,

  icon: new L.icon({
    iconUrl:       `${ENV.rootURL}assets/images/leaf_logo.png`,
    iconRetinaUrl: `${ENV.rootURL}assets/images/leaf_logo.png`,
    iconSize:      [30, 50],
    iconAnchor:    [22, 94],
    popupAnchor:   [-3, -76],
  })
});
