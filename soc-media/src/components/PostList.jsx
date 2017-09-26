import React from "react";
import Post from "./Post"

function PostList(props){
  let posts = props.posts;
  let outputPosts =
    posts.map(function (post){
      return <Post
        title={post.title}
        author={post.author}
        content={post.content}
        key={post.author + post.title }
      />
    });

  return (
    <div>
      {outputPosts}
    </div>
  )
}

export default PostList;
