import React from "react";
import Post from "./Post";
import PropTypes from "prop-types"

function PostList(props){

  return (
    <div>
      {props.posts.map((post, i) =>
        <Post
          title={post.title}
          author={post.author}
          avatar={post.avatar}
          content={post.content}
          postTime={post.postTime}
          timeSincePost={post.timeSincePost}
          id={post.id}
          key={i}
          handleDelete={props.handleDelete}
        />
        )}
    </div>
  )
  PostList.propTypes = {
    posts: propTypes.array
  }
}

export default PostList;
