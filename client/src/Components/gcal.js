import request from "superagent";
const credentials = require("../credentials");

const CALENDAR_ID = sessionStorage.getItem("email");
const API_KEY = credentials.api_key;
const holidayUrl = `https://www.googleapis.com/calendar/v3/calendars/en.usa#holiday@group.v.calendar.google.com/${API_KEY}`;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  // console.log("calendar email", CALENDAR_ID, "API", API_KEY);
  request.get(holidayUrl).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        });
      });
      console.log("holidays added from google", events);
      request.get(url).end((err, resp) => {
        if (!err) {
          JSON.parse(resp.text).items.map(event => {
            events.push({
              start: event.start.date || event.start.dateTime,
              end: event.end.date || event.end.dateTime,
              title: event.summary,
            });
          });
          console.log("events from google", events);
          callback(events);
        }
      });
    }
  });
}
