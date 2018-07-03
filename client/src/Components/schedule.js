import React from "react";
import Modal from "react-responsive-modal";
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
    endTimeHour: "",
    endTimeMin: "",
    open: false,
    startTimeHour: "",
    startTimeMin: "",
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

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.openModal} >Add Event</button>
        <Modal open={open} onClose={this.closeModal} center>
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add Event</h2>
          <input />
          <br />
          {/* <DatePicker selected={this.state.startDate} onChange={this.handleInputChange}/> */}
          <h4 style={{textAlign:"center"}}><b>Start</b></h4>
          <label>Month</label>
          <select
            value={this.state.startMonth}
            onChange={this.handleDropDownStartMonth}
          >
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select>
          <label>Day</label>
          <select
            value={this.state.startDay}
            onChange={this.handleDropDownStartDay}
          >
            <option value="0">01</option>
            <option value="1">02</option>
            <option value="2">03</option>
            <option value="3">04</option>
            <option value="4">05</option>
            <option value="5">06</option>
            <option value="6">07</option>
            <option value="7">08</option>
            <option value="8">09</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
            <option value="12">13</option>
            <option value="13">14</option>
            <option value="14">15</option>
            <option value="15">16</option>
            <option value="16">17</option>
            <option value="17">18</option>
            <option value="18">19</option>
            <option value="19">20</option>
            <option value="20">21</option>
            <option value="21">22</option>
            <option value="22">23</option>
            <option value="23">24</option>
            <option value="24">25</option>
            <option value="25">26</option>
            <option value="26">27</option>
            <option value="27">28</option>
            <option value="28">29</option>
            <option value="29">30</option>
            <option value="30">31</option>
          </select>
          <label>Year</label>
          <select
            value={this.state.startYear}
            onChange={this.handleDropDownStartYear}
          >
            <option value="2017">2018</option>
            <option value="2018">2019</option>
            <option value="2019">2020</option>
          </select>
          <br />
          <label>Hour</label>
          <select
            value={this.state.startTimeHour}
            onChange={this.handleDropDownStartTimeHour}
          >
            <option value="0">01</option>
            <option value="1">02</option>
            <option value="2">03</option>
            <option value="3">04</option>
            <option value="4">05</option>
            <option value="5">06</option>
            <option value="6">07</option>
            <option value="7">08</option>
            <option value="8">09</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
          </select>
          <label>Minute</label>
          <select
            value={this.state.startTimeMin}
            onChange={this.handleDropDownStartTimeMin}
          >
            <option value="0">00</option>
            <option value="29">30</option>
          
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
          <h4 style={{textAlign:"center"}}><b>End</b></h4>
          <label>Month</label>
          <select
            value={this.state.endMonth}
            onChange={this.handleDropDownEndMonth}
          >
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select>
          <label>Day</label>
          <select
            value={this.state.endDay}
            onChange={this.handleDropDownEndDay}
          >
            <option value="0">01</option>
            <option value="1">02</option>
            <option value="2">03</option>
            <option value="3">04</option>
            <option value="4">05</option>
            <option value="5">06</option>
            <option value="6">07</option>
            <option value="7">08</option>
            <option value="8">09</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
            <option value="12">13</option>
            <option value="13">14</option>
            <option value="14">15</option>
            <option value="15">16</option>
            <option value="16">17</option>
            <option value="17">18</option>
            <option value="18">19</option>
            <option value="19">20</option>
            <option value="20">21</option>
            <option value="21">22</option>
            <option value="22">23</option>
            <option value="23">24</option>
            <option value="24">25</option>
            <option value="25">26</option>
            <option value="26">27</option>
            <option value="27">28</option>
            <option value="28">29</option>
            <option value="29">30</option>
            <option value="30">31</option>
          </select>

          <label>Year</label>
          <select
            value={this.state.endYear}
            onChange={this.handleDropDownEndYear}
          >
            <option value="2017">2018</option>
            <option value="2018">2019</option>
            <option value="2019">2020</option>
          </select>

          <br />
          <label>Hour</label>
          <select
            value={this.state.endTimeHour}
            onChange={this.handleDropDownEndTimeHour}
          >
            <option value="0">01</option>
            <option value="1">02</option>
            <option value="2">03</option>
            <option value="3">04</option>
            <option value="4">05</option>
            <option value="5">06</option>
            <option value="6">07</option>
            <option value="7">08</option>
            <option value="8">09</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
          </select>
          <label>Minute</label>
          <select
            value={this.state.endTimeMin}
            onChange={this.handleDropDownEndTimeMin}
          >
            <option value="0">00</option>
            <option value="29">30</option>
          
          </select>
          <label>AM/PM</label>
          <select
            value={this.state.endAMPM}
            onChange={this.handleDropDownEndTimeAMPM}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          
          </select>
          <form>

            {/* add event name */}
            {/* <input />  */}
            <button>Submit</button>
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
