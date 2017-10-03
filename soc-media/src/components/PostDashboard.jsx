import React from "react";
import CreatePostControl from "./CreatePostControl";
import Post from "../models/Post.js";
import PostList from "./PostList";
import AuthorList from "./AuthorList";
import PropTypes from "prop-types";



class PostDashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      showForm: false,
      posts: [
      ]
    }
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() => this.updatePostTimeSincePosted(),
    5000);
    let arr = [
    new Post(
      "Billy Bones",
      "hello world",
      "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
      "I am a fish"
),
    new Post (
      "Billy Bones",
      "man oh man",
      "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
      "this is hard"
),
    new Post(
      "Suzy Q",
      "I am hungry",
      "https://images-cdn.9gag.com/photo/2089260_700b.jpg",
      "I want to eat"
),
    new Post(
      "Suzy Q",
      "I like bikes",
      "https://images-cdn.9gag.com/photo/2089260_700b.jpg",
      "and turtles"
),
    new Post(
      "Jimmy Dean",
      "WTF",
      "http://www.writeups.org/wp-content/uploads/Sharkboy-Taylor-Lautner-Adventures-of-Sharkboy-and-Lavagirl-c.jpg",
      "This is sum bullshit"
),
  ]
    console.log(arr)
    this.setState({posts: arr})
  }
  componentWillUnmount() {
    clearInterval(this.timeSinceOpenedChecker);
  }
  updatePostTimeSincePosted() {
    console.log("beep");
    let newPosts = this.state.posts.slice();
    newPosts.forEach((post) =>
      post.setTimeSincePost()
    );
    this.setState({posts: newPosts})
  }
  handleNewPost(newPost) {

    let newPostsList = this.state.posts.slice();
    newPostsList.push(newPost);
    this.setState({posts: newPostsList});
  }
  handleDelete(p) {
    let newPostsList = this.state.posts.filter(function (post){return post.content != p.content})

    this.setState({posts: newPostsList});
  }
  render(){
    return (
      <div className="row">
        <div className="col-xs-9">
          <CreatePostControl handleNewPost={this.handleNewPost} />
          <PostList posts={this.state.posts} handleDelete={this.handleDelete} />
        </div>
        <div className="col-xs-3">
          <AuthorList posts={this.state.posts} />
        </div>
      </div>
  )
  }
}

PostDashboard.propTypes = {
  handleNewPost: PropTypes.func
}
export default PostDashboard;
