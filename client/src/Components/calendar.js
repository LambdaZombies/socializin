import React from "react";
import events from "./events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const calendar = () => (
  <div style={{ height: 700 }}>
    <BigCalendar
      events={events}
      step={60}
      views={allViews}
      defaultDate={new Date(2018, 6, 1)}
    />
  </div>
);

export default calendar;
