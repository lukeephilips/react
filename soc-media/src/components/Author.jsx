import React from "react";

function Author(props){
  const style ={
    margin: "5px",
  };
  return (
    <div style={style} className="row">
      <div className="col-xs-4">
        <img src={props.avatar} style={{width: "100px"}}/>
      </div>
      <div className="col-xs-8">
        <span>{props.author}</span>
        <br />
        <span>Posts: {props.count}</span>
      </div>
    </div>
  );
}

export default Author;
