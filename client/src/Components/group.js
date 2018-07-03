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

class Group extends React.Component {
  state = {
    newGroup: "",
  };

  handleDropDownNewGroup = e => {
    this.setState({ newgroup: e.target.value });
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    // const { open } = this.state;
    return (
      <div>
        {/* <button onClick={this.openModal} >Add Group </button> */}
        {/* <Modal open={open} onClose={this.closeModal} center> */}
        Group:
        <input type="text" name="name" />
          {/* <input /> */}
          <br />
          <form>

            {/* add event name */}
            {/* <input />  */}
            <button>Submit</button>
            {/* <button>stays</button>
            <button>inside</button>
            <button>the modal</button> */}
          </form>
        {/* </Modal> */}
        {/* <button onClick={this.buttonClicked}>Weekly</button> */}
      </div>
    );
  }
}
export default Group;
