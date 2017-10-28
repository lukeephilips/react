import React from "react";
import { FormControl } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import c from './../constants';

class DeletePost extends React.Component {
  constructor(props){
    super(props)
    this.deletePost = this.deletePost.bind(this);
  }

  deletePost(){
    const {dispatch} = this.props;
    const action = {
      type: c.DELETE_POST,
      id: this.props.id
    }
    dispatch(action);
  }
  render() {
    return <Button onClick={this.deletePost} bsStyle="danger" bsSize="xsmall">Delete</Button>
  }
}

export default connect()(DeletePost);
