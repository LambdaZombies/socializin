import React, { Children } from "react";
import events from "./events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Schedule from "./schedule";
import Navbar from "./navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const CURRENT_DATE = moment().toDate();
// date cell wrapper
const ColoredDateCellWrapper = ({ children, value }) =>
  React.cloneElement(Children.only(children), {
    style: {
      ...children.style,
      backgroundColor: value < CURRENT_DATE ? "lightgreen" : "lightblue",
    },
  });

console.log(events);

const calendar = () => (
  <div>
    <div style={{ height: 700, margin: "10px" }}>
      <Navbar />
      <BigCalendar
        events={events}
        step={60}
        views={allViews}
        defaultDate={CURRENT_DATE}
        components={{
          // you have to pass your custom wrapper here
          // so that it actually gets used
          dateCellWrapper: ColoredDateCellWrapper,
        }}
      />
      <Schedule />
    </div>
  </div>
);

export default calendar;
