import React from "react";
import Post from "../models/Post.js";
import { FormControl } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";


class CreatePost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: "Say something",
    }
    this.updateContent = this.updateContent.bind(this);
  }
  updateContent(){
    event.preventDefault()
    const {_content, _title} = this.refs;
    console.log(this.refs);
    let author = "Billy Bones";
    let avatar = "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg"
    var newPost = new Post(author, avatar, _title.value, _content.value)
    console.log("updatecontent");
    console.log(newPost)
    this.props.passthroughPost(newPost);
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

export default CreatePost;
