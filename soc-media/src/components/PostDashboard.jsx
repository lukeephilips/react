import React from "react";
import CreatePostControl from "./CreatePostControl";
import PostList from "./PostList";
import AuthorList from "./AuthorList";
import PropTypes from "prop-types";



class PostDashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      showForm: false,
      posts: [
        {
          title: "hello world",
          author: "Billy Bones",
          content: "I am a fish",
          avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
          id: 1
        },
        {
          title: "man oh man",
          author: "Billy Bones",
          content: "this is hard",
          avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
          id: 2
        },
        {
          title: "I am hungry",
          author: "Suzy Q",
          content: "I want to eat",
          avatar: "https://images-cdn.9gag.com/photo/2089260_700b.jpg",
          id: 3
        },
        {
          title: "WTF",
          author: "Jimmy Dean",
          content: "This is sum bullshit",
          avatar: "http://www.writeups.org/wp-content/uploads/Sharkboy-Taylor-Lautner-Adventures-of-Sharkboy-and-Lavagirl-c.jpg",
          id: 4
        }
      ]
    }
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    

  }
  handleNewPost(newPost) {
    console.log(newPost)

    let newPostsList = this.state.posts.slice();
    newPostsList.push(newPost);
    this.setState({posts: newPostsList});
  }
  handleDelete(p) {
    let newPostsList = this.state.posts.filter(function (post){return post.content !== p.content})
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
