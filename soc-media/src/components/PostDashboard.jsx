import React from "react";
import CreatePostControl from "./CreatePostControl";
import PostList from "./PostList";
import AuthorList from "./AuthorList";
import Search from './Search'
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { v4 } from 'uuid';
import c from './../constants';

class PostDashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(term){
    this.setState({term: term});
  }

  componentDidMount() {
    const {dispatch} = this.props;
    let seedPosts = [
      {author: "Billy Bones",
      title: "I am a fish",
      avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
      content: "so I swim a lot",
      postTime: 1509362126374
    },
    {author: "Suzy Q",
      title: "Hello World",
      avatar: "https://overanalyzinganimation.files.wordpress.com/2013/12/ladjy.jpg",
      content: "this is a test",
      postTime: 1509262126374
    },
    {author: "Suzy Q",
      title: "Goodbye World",
      avatar: "https://overanalyzinganimation.files.wordpress.com/2013/12/ladjy.jpg",
      content: "this is not a test",
      postTime: 1509272126374
    }];
    seedPosts.forEach((post) => {
      const action = {
        type: c.ADD_POST,
        author: post.author,
        title: post.title,
        avatar: post.avatar,
        content: post.content,
        postTime: post.postTime,
        id: v4()
      }
      dispatch(action);
    });

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
          <PostList
            posts={this.props.masterPostList}
            term={this.state.term} />
        </div>
        <div className="col-md-4 col-xs-6">
          <div className="row col-xs-12">
            <Search handleFilter={this.handleFilter} term={this.state.term}/>
          </div>
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
