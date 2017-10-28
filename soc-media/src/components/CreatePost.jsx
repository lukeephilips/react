import React from "react";
import Post from "../models/Post.js";
import { FormControl } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import c from './../constants';

class CreatePost extends React.Component{
  constructor(props){
    super(props);
    this.updateContent = this.updateContent.bind(this);
  }
  updateContent(){
    event.preventDefault()
    const {_content, _title} = this.refs;
    console.log(this.refs);

    let author = "Billy Bones";
    let avatar = "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg"
    const {dispatch} = this.props;
    const action = {
      type: c.ADD_POST,
      author: author,
      title: _title.value,
      avatar: avatar,
      content: _content.value,
      postTime: new Date().getTime(),
      id: v4()
    }
    dispatch(action);
    console.log("updatecontent");
    this.props.hideForm();

    _title.value = "";
    _content.value = "";
  }
  render(){
    const style = {
      padding: "10px",
      marginBottom: "5px",
      width: "250px",

    }
    return (
      <div style={style}>
         <FormGroup>
          <input
            type="text"
            placeholder="title"
            className="form-control"
            ref= "_title" />
          <textarea
            placeholder="Say something"
            className="form-control"
            ref = "_content" />
          <Button onClick={this.updateContent} bsStyle="success">Beep</Button>
        </FormGroup>
      </div>
    )
  }
}

export default connect()(CreatePost);
