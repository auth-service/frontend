import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class MsgDialog extends Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false,
      title: "",
      content: "",
    };
    this.openDialog = this.openDialog.bind(this);
  }

  openDialog = (title, content) =>
    this.setState({
      isDialogOpen: true,
      title: title,
      content: content,
    });

  handleClose = () =>
    this.setState({ isDialogOpen: false, title: "", content: "" });

  render() {
    return (
      <div>
        {this.state.isDialogOpen && (
          <Modal
            show={this.state.isDialogOpen}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{this.state.content}</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}

export default MsgDialog;
