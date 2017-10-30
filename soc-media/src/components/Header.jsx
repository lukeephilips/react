import React from "react";

function Header(props){
  let style = {
    height: "100px",
    backgroundColor: "lightblue",
    fontFamily: "Tahoma",
    marginBottom: "20px",
  }
  return (
    <div style={style}>
      <h1>HoboFacts</h1>
      {/* <Search /> */}
    </div>
  )
}

export default Header;
