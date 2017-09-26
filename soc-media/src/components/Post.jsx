import React from "react";

function Post(props){
  let style = {
    border: "solid 1px blue",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "5px",
    width: "250px",
    textAlign: "center"
  }
  return (
    <div style={style}>
      <img src={props.avatar} style={{width:"100px"}}/>
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default Post;
