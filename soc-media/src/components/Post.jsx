import React from "react";
import { Button } from "react-bootstrap";

function Post(props){
  let style = {
    border: "solid 1px blue",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
    width: "250px",
  }
  function deletePost() {
    props.handleDelete(props)
  }
  return (
    <div style={style}>
      <div className="row">
        <div className="col-xs-5">
          <img src={props.avatar} style={{width:"100px"}}/>
        </div><div className="col-xs-5">
          <h4>{props.title}</h4>
        </div>
      </div>
        <p>{props.content}</p>
        <Button onClick={deletePost} bsStyle="danger" bsSize="xsmall">Delete</Button>
    </div>
  )
}

export default Post;
