import React from "react";
import CreatePost from "./CreatePost";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";


class CreatePostControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
    }
    this.handleShowForm = this.handleShowForm.bind(this);
    this.hideForm = this.hideForm.bind(this);


  }
  hideForm(){
    this.setState({showForm: false})
  }

  handleShowForm() {
    this.setState({showForm: true})
  }

  render(){
    if (this.state.showForm) {
      return (
        <Modal
          show={this.state.showForm}
          onHide={this.hideForm}
          bsSize="small">
          <Modal.Header>Say Something</Modal.Header>
          <Modal.Body>
            <CreatePost hideForm={this.hideForm}/>
          </Modal.Body>
        </Modal>
      )
    }
    else {
      return(
      <Button onClick={this.handleShowForm}>Say Something</Button>
      )
    }
  }
}

export default CreatePostControl;
