import React from "react";
import CreatePost from "./CreatePost";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";


class CreatePostControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
    }
    this.handleShowForm = this.handleShowForm.bind(this);
    this.passthroughPost = this.passthroughPost.bind(this);
    this.hideForm = this.hideForm.bind(this);


  }
  hideForm(){
    this.setState({showForm: false})
  }
  passthroughPost(post){
    this.hideForm();
    this.props.handleNewPost(post);
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
          bsSize="xsmall">
          <Modal.Header>Say Something</Modal.Header>
          <Modal.Body>
            <CreatePost passthroughPost={this.passthroughPost} />
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
