import React from "react";
import Modal from "react-responsive-modal";
import DatePicker from 'react-datepicker';

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

  handleDropDownStartTimeHour = e => {
    this.setState({ startTimeHour: e.target.value });
  };

  handleDropDownStartTimeMin = e => {
    this.setState({ startTimeMin: e.target.value });
  };

  handleDropDownStartTimeAMPM = e => {
    this.setState({ startAMPM: e.target.value });
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

          <h4 style={{textAlign:"center"}}><b>Start</b></h4>
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
