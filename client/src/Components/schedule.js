import React from "react";
import Modal from "react-responsive-modal";

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
    endTime: "",
    open: false,
    startTime: "",
  };

  handleDropDownStartTime = e => {
    this.setState({ startTime: e.target.value });
  };

  handleDropDownEndTime = e => {
    this.setState({ endTime: e.target.value });
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
        <button onClick={this.openModal}>Daily</button>
        <Modal open={open} onClose={this.closeModal} center>
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <select
            value={this.state.startTime}
            onChange={this.handleDropDownStartTime}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            value={this.state.endTime}
            onChange={this.handleDropDownEndTime}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        {/* <button onClick={this.buttonClicked}>Weekly</button> */}
      </div>
    );
  }
}
export default Schedule;
