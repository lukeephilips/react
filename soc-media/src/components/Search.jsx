import React from "react";
import { connect } from 'react-redux';
import c from "../constants"

class Search extends React.Component {
  constructor(props){
    super(props);
    this.filterPosts = this.filterPosts.bind(this);
  }
  filterPosts(){
    const term = this.refs._filter;
    this.props.handleFilter(term.value);
  }

  render(){
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={this.filterPosts}
        ref="_filter"/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    term: state
  }
}
export default connect(mapStateToProps)(Search);
