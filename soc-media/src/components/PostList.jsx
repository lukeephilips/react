import React from "react";
import Post from "./Post";
import PropTypes from "prop-types"

function PostList(props){

  return (
    <div>
      {props.posts.map((post) =>
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
