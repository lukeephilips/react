import React from "react";

function CreatePost(props){
  let style = {
    border: "solid 1px blue",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "5px",
    width: "250px",
    height: "100px",
    textAlign: "center"

  }
  return (
    <div style={style}>
      <textarea placeholder="Say something" />
    </div>
  )
}

export default CreatePost;
