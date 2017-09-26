import React from "react";
import Ticket from "./Ticket";

const TicketList = (props) => {
  let styles = {
    border: '1px solid black',
    width: '300px',
    padding: '20px',
  }
  return (
    <div style={styles}>
      <Ticket location="over there" user="Billy" issue="hurt finger" />
      <Ticket location="right here" user="Bobby" issue="is dumb" />

    </div>
  );
}
export default TicketList;
