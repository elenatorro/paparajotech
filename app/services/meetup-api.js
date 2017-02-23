import Ember from 'ember';
import { MeetupApiKey } from 'paparajotech/utils/meetup-api-key';
import { MeetupEvents } from 'paparajotech/constants/meetup-events';

const {
  Service,
  RSVP: { Promise },
} = Ember;

const MeetupAPI = {
  URL: 'http://api.meetup.com'
};

export default Service.extend({
  getEvent(eventName) {
    return fetch(`${MeetupAPI.URL}/${eventName}?key=${MeetupApiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then((response) => {
      return response.json();
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
