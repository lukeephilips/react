import React from "react";
import PostDashboard from "./PostDashboard";



import Header from "./Header"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      // marginLeft: "10px",
      // marginRight: "10px",


      fontFamily: "Arial",
    }

    return (
      <div style={style}>
        <Header />
        <PostDashboard />
      </div>
    );
  }
}

export default App;
