import React from "react";

function Search(props){
  let style = {
    float: "right",
    marginRight: "20px"

  }
  return (
    <div style={style}>
      <input type="text" placeholder="Search" />
    </div>
  )
}

export default Search;
