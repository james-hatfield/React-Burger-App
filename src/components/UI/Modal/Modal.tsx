import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

interface IModal {
  show: boolean;
  closeModal: () => void;
}

class Modal extends React.Component<IModal> {
  shouldComponentUpdate(nextProps: IModal) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.closeModal} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
export default Modal;
