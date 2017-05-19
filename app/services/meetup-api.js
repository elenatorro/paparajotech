import Ember from 'ember';
import { MeetupApiKey } from 'paparajotech/utils/meetup-api-key';
import { MeetupEvents } from 'paparajotech/constants/meetup-events';

const {
  Service,
  RSVP: { Promise },
} = Ember;

const MeetupAPI = Object.freeze({
  URL: 'https://api.meetup.com'
});

const FetchOptions = Object.freeze({
  mode: 'no-cors',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
});

export default Service.extend({
  getEvent(eventName) {
    return fetch(`${MeetupAPI.URL}/${eventName}?key=${MeetupApiKey}`, FetchOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
  },

  getEvents() {
    let eventsRequests = [];

    MeetupEvents.forEach((eventName) => {
      eventsRequests.push(this.getEvent(eventName));
    });

    return Promise.all(eventsRequests);
  }
});
