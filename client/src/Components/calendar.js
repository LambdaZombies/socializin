import React, { Children } from 'react';
import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Schedule from './schedule';
import Group from './group';
import Navbar from './navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// const eventStyleGetter = (event, start, end, isSelected) => {
//   console.log('EVENT!!', event);
//   var backgroundColor = '#' + event.hexColor;
//   var style = {
//     backgroundColor: 'red',
//     borderRadius: '0px',
//     opacity: 0.8,
//     color: 'black',
//     border: '0px',
//     display: 'block'
//   };
//   return {
//     style: style
//   };
// };

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const CURRENT_DATE = moment().toDate();
// date cell wrapper
const ColoredDateCellWrapper = ({ children, value }) =>
  React.cloneElement(Children.only(children), {
    style: {
      ...children.style,
      backgroundColor: value <= CURRENT_DATE ? 'lightblue' : 'lightyellow'
    }
  });

const calendar = () => (
  <div>
    <div style={{ height: 700}}>
      <Navbar />
      <BigCalendar
        events={events}
        step={60}
        views={allViews}
        defaultDate={CURRENT_DATE}
        onSelectSlot={this.slotSelected}
        onSelectEvent={this.eventSelected}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle = {
            backgroundColor: '#F7999C',
            color: 'black',
            borderRadius: '10px',
            border: 'none'
          };

          if (event.isMine) {
            newStyle.backgroundColor = '#A5F37E';
          }

          if (event.isFriend) {
            newStyle.backgroundColor = '#76D5E8';
          }

          return {
            className: '',
            style: newStyle
          };
        }}
        components={{
          // you have to pass your custom wrapper here
          // so that it actually gets used
          dateCellWrapper: ColoredDateCellWrapper
        }}
      />
      <Schedule />
      <Group />
    </div>
  </div>
);

export default calendar;
