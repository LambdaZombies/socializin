import React from "react";
// import events from "./events";
// import BigCalendar from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// moment.locale("en-GB");
// BigCalendar.momentLocalizer(moment);

// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Schedule extends React.Component {
    buttonClicked() {
        console.log('Button was clicked!')
    }

    render() {
        return (<div>
            <button onClick={this.buttonClicked}>Daily</button>
            <button onClick={this.buttonClicked}>Weekly</button>
        </div>);
    }
}

export default Schedule;