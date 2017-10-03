import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Moment from "moment"

function Post(props){
  let style = {
    border: "solid 1px grey",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
    width: "250px",
    height: "200px",
  }
  function deletePost() {
    props.handleDelete(props)
  }
  return (
    <div style={style} className="col-xs-3">
      <div className="row">
        <div className="col-xs-5">
          <img src={props.avatar} style={{width:"100px"}}/>
        </div><div className="col-xs-5">
          <h4>{props.title}</h4>
        </div>
      </div>
        <p>{props.content}</p>
        <p>{props.timeSincePost} ago</p>
        <Button onClick={deletePost} bsStyle="danger" bsSize="xsmall">Delete</Button>
    </div>
  )
};
Post.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postTime: PropTypes.object,
  timeSincePost: PropTypes.string
}

export default Post;
