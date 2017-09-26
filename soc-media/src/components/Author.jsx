import React from "react";

function Author(props){

  return (
    <div>
      <img src={props.avatar} style={{width: "100px"}}/>
      <span>{props.author}</span>
    </div>
  )
}

export default Author;
