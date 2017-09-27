import React from "react";
import Post from "../models/Post.js"

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
    let author = "Billy Bones";
    let avatar = "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg"
    var newPost = new Post(author, avatar, _title.value, _content.value, _content.title)
    console.log(newPost)
    this.props.handleNewPost(newPost);
  }
  render(){
    const style = {
      border: "solid 1px blue",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "5px",
      width: "250px",
      textAlign: "center"

    }
    return (
      <div style={style}>
        <input ref= "_title" placeholder="title" className="form-control" />
        <textarea
          placeholder="Say something"
          ref = "_content" className="form-control"
        />
        <button onClick={this.updateContent} className="btn btn-success">Beep</button>
      </div>
    )
  }
}

export default CreatePost;
