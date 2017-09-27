import React from "react";
import PostList from "./PostList";
import AuthorList from "./AuthorList";
import CreatePost from "./CreatePost";
import PropTypes from "prop-types";



class PostDashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      posts: [
        {
          title: "hello world",
          author: "Billy Bones",
          content: "I am a fish",
          avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
        },
        {
          title: "man oh man",
          author: "Billy Bones",
          content: "this is hard",
          avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
        },
        {
          title: "I am hungry",
          author: "Suzy Q",
          content: "I want to eat",
          avatar: "https://images-cdn.9gag.com/photo/2089260_700b.jpg",
        },
        {
          title: "WTF",
          author: "Jimmy Dean",
          content: "This is sum bullshit",
          avatar: "http://www.writeups.org/wp-content/uploads/Sharkboy-Taylor-Lautner-Adventures-of-Sharkboy-and-Lavagirl-c.jpg",
        }
      ]
    }
    this.handleNewPost = this.handleNewPost.bind(this);
  }
  handleNewPost(newPost) {
    let newPostsList = this.state.posts.slice();
    newPostsList.push(newPost);
    this.setState({posts: newPostsList});
  }
  render(){

    return (
      <div className="row">
        <div className="col-xs-9">
          <CreatePost handleNewPost={this.handleNewPost} />
          <PostList posts={this.state.posts} />
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
