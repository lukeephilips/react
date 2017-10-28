import React from "react";
import CreatePostControl from "./CreatePostControl";
import Post from "../models/Post.js";
import PostList from "./PostList";
import AuthorList from "./AuthorList";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class PostDashboard extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() => this.updatePostTimeSincePosted(),
    5000);
  }
  componentWillUnmount() {
    clearInterval(this.timeSinceOpenedChecker);
  }
  updatePostTimeSincePosted() {
    this.forceUpdate();
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-8 col-xs-6">
          <CreatePostControl />
          <PostList posts={this.props.masterPostList} />
        </div>
        <div className="col-md-4 col-xs-6">
          <AuthorList posts={this.props.masterPostList} />
        </div>
      </div>
    )
  }
}

PostDashboard.propTypes = {
}
const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}
export default connect(mapStateToProps)(PostDashboard);
