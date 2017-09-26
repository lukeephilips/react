import React from "react";
import Header from "./Header"
import Ticket from "./Ticket"
import TicketList from "./TicketList"

function App(props){
  let style ={
    fontFamily: "Tahoma",
  }
  return (
    <div style={style} >
      <Header />
      <TicketList />
    </div>
  );
}

export default App;
