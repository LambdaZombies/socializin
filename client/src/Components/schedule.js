import React from "react";
import Modal from "react-responsive-modal";
import moment from "moment";
import axios from "axios";
import { Button, Input } from "reactstrap";
import base from "./base";
// import DatePicker from 'react-datepicker';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Schedule extends React.Component {
  state = {
    open: false,
    startMonth: "",
    startDay: "",
    startYear: "",
    startHour: "",
    startTimeMin: "",
    startAMPM: "AM",
    endMonth: "",
    endDay: "",
    endYear: "",
    endHour: "",
    endTimeMin: "",
    endAMPM: "AM",
    title: "",
    allDay: false,
    allWeek: false,
    desc: "",
    user: "",
    id: sessionStorage.getItem("tokenId"),
  };

  submitEvent = id => {
    console.log("get user submit", this.state.user);
    console.log("get token submit", this.state.id);
    let startHour, endHour;
    if (this.state.startAMPM === "PM")
      startHour = this.state.startTimeHour + 12;
    if (this.state.endAMPM === "PM") endHour = this.state.endTimeHour + 12;
    console.log("state submit", this.state);
    let startDate = new Date(
      this.state.startYear,
      this.state.startMonth,
      this.state.startDay,
      this.state.startTimeHour,
      this.state.startTimeMin,
      0
    );

    console.log(startDate);

    let endDate = new Date(
      Number(this.state.endYear),
      Number(this.state.endMonth),
      Number(this.state.endDay),
      Number(this.state.endTimeHour),
      Number(this.state.endTimeMin),
      0
    );

    console.log(endDate);

    const body = {
      id,
      title: this.state.title,
      allDay: this.state.allDay,
      allWeek: this.state.allWeek,
      start: startDate,
      end: endDate,
      desc: this.state.desc,
    };
    console.log("event send id", id);
    axios
      .post(`${base}/event`, body)
      .then(() => {
        console.log("Event created successfully!");
      })
      .catch(err => {
        throw err;
      });
    // window.location = "/calendar";
  };

  getUser = () => {
    console.log(this.state.id, "id");
    let userId;
    axios
      .get(`${base}/userToken/${this.state.id}`)
      .then(res => {
        let userId = res.data._id;
        this.setState({ user: res.data });
        console.log("USERID", res.data._id);
        console.log("User retrieved successfully!");
        this.submitEvent(userId);
      })
      .catch(err => {
        console.log("error getting user", err);
        throw err;
      });
  };

  handleDropDownStartMonth = e => {
    this.setState({ startMonth: e.target.value });
  };

  handleDropDownStartDay = e => {
    this.setState({ startDay: e.target.value });
  };

  handleDropDownStartYear = e => {
    this.setState({ startYear: e.target.value });
  };

  handleDropDownStartTimeHour = e => {
    this.setState({ startTimeHour: e.target.value });
  };

  handleDropDownStartTimeMin = e => {
    this.setState({ startTimeMin: e.target.value });
  };

  handleDropDownStartTimeAMPM = e => {
    this.setState({ startAMPM: e.target.value });
  };

  handleDropDownEndMonth = e => {
    this.setState({ endMonth: e.target.value });
  };

  handleDropDownEndDay = e => {
    this.setState({ endDay: e.target.value });
  };

  handleDropDownEndYear = e => {
    this.setState({ endYear: e.target.value });
  };

  handleDropDownEndTimeHour = e => {
    this.setState({ endTimeHour: e.target.value });
  };

  handleDropDownEndTimeMin = e => {
    this.setState({ endTimeMin: e.target.value });
  };

  handleDropDownEndTimeAMPM = e => {
    this.setState({ endAMPM: e.target.value });
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleDesc = e => {
    this.setState({ desc: e.target.value });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>Add Event</Button>
        <Modal open={this.state.open} onClose={this.toggleModal} center>
          <h2 ref={subtitle => (this.subtitle = subtitle)}>New Event Title</h2>
          <Input
            type="textarea"
            name="text"
            value={this.state.title}
            onChange={this.handleTitle}
          />
          <br />
          {/* <DatePicker selected={this.state.startDate} onChange={this.handleInputChange}/> */}
          <h4 style={{ textAlign: "center" }}>
            <b>Start</b>
          </h4>
          <label>Month</label>
          <select
            value={this.state.startMonth}
            onChange={this.handleDropDownStartMonth}
          >
            <option value="" disabled>Choose a month</option>
            <option value="01">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <label>Day</label>
          <select
            value={this.state.startDay}
            onChange={this.handleDropDownStartDay}
          >
            <option value="" disabled>Choose a day</option>
            <option value="01">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <label>Year</label>
          <select
            value={this.state.startYear}
            onChange={this.handleDropDownStartYear}
          >
            <option value="" disabled>Choose a year</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
          <br />
          <label>Hour</label>
          <select
            value={this.state.startTimeHour}
            onChange={this.handleDropDownStartTimeHour}
          >
            <option value="" disabled>Set hour</option>
            <option value="01">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <label>Minute</label>
          <select
            value={this.state.startTimeMin}
            onChange={this.handleDropDownStartTimeMin}
          >
            <option value="" disabled>Set minutes</option>
            <option value="0">00</option>
            <option value="30">30</option>
          </select>
          <label>AM/PM</label>
          <select
            value={this.state.startAMPM}
            onChange={this.handleDropDownStartTimeAMPM}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <br />
          <h4 style={{ textAlign: "center" }}>
            <b>End</b>
          </h4>
          <label>Month</label>
          <select
            value={this.state.endMonth}
            onChange={this.handleDropDownEndMonth}
          >
            <option value="" disabled>Choose a month</option>
            <option value="01">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <label>Day</label>
          <select
            value={this.state.endDay}
            onChange={this.handleDropDownEndDay}
          >
            <option value="" disabled>Choose a day</option>
            <option value="01">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>

          <label>Year</label>
          <select
            value={this.state.endYear}
            onChange={this.handleDropDownEndYear}
          >
            <option value="" disabled>Choose a year</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>

          <br />
          <label>Hour</label>
          <select
            value={this.state.endTimeHour}
            onChange={this.handleDropDownEndTimeHour}
          >
            <option value="" disabled>Set hour</option>
            <option value="01">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <label>Minute</label>
          <select
            value={this.state.endTimeMin}
            onChange={this.handleDropDownEndTimeMin}
          >
            <option value="" disabled>Set minutes</option>
            <option value="0">00</option>
            <option value="30">30</option>
          </select>
          <label>AM/PM</label>
          <select
            value={this.state.endAMPM}
            onChange={this.handleDropDownEndTimeAMPM}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <h4 style={{ textAlign: "center" }}>
            <b>Description</b>
          </h4>
          <Input
            type="textarea"
            name="text"
            value={this.state.desc}
            onChange={this.handleDesc}
          />
          <form>
            <br />
            {/* add event name */}
            {/* <input />  */}
            <Button onClick={this.getUser}>Submit</Button>
            {/* <button>stays</button>
            <button>inside</button>
            <button>the modal</button> */}
          </form>
        </Modal>
        {/* <button onClick={this.buttonClicked}>Weekly</button> */}
      </div>
    );
  }
}
export default Schedule;
