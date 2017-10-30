import React from "react";
import Post from "./Post";
import PropTypes from "prop-types"

function PostList(props){

  let filteredPosts = props.posts;
  if (props.term !== "") {
    filteredPosts = props.posts.filter(function(post) {
      if(post.content.includes(props.term.toLowerCase()) ||
      post.title.toLowerCase().includes(props.term.toLowerCase())||
      post.author.toLowerCase().includes(props.term.toLowerCase())){
        return post;
      }
    });
  }

  return (
    <div>
      {filteredPosts.map((post) =>
        <Post
          {...post}
          key = {post.id}
        />
      )}
    </div>
  )
  PostList.propTypes = {
    posts: propTypes.array
  }
}

export default PostList;
