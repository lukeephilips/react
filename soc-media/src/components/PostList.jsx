import React from "react";
import Post from "./Post";
import PropTypes from "prop-types"

function PostList(props){

  return (
    <div>
      {props.posts.map((post) =>
          <Post
            title={post.title}
            author={post.author}
            avatar={post.avatar}
            content={post.content}
            id={post.id}
            key={post.id }
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
