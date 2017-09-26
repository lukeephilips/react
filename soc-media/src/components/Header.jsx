import React from "react";
import Search from "./Search";


function Header(props){
  let style = {
    height: "100px",
    width: "100%",
    backgroundColor: "lightblue",
    fontFamily: "Tahoma",
    marginBottom: "20px",
  }
  return (
    <div style={style}>
      <h1>HoboFacts</h1>
      <Search />
    </div>
  )
}

export default Header;
