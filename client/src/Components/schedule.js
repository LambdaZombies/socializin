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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

class Schedule extends React.Component {
  state = {
    open: false,
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  // buttonClicked() {
  //     console.log('Button was clicked!')
  // }

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.openModal}>Daily</button>
        <Modal open={open} onClose={this.closeModal} center>
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
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
