import React from "react";
import Author from "./Author"

function AuthorList(props){
  let authors =
    props.posts.map(function (post){
      return {author: post.author,
              avatar: post.avatar}
    });
  let outputAuthors =
    authors.map(function (author){
      return <Author
        author={author.author}
        avatar={author.avatar}
        key={author.author}
      />
    });

  return (
    <div>
      {outputAuthors}
    </div>
  )
}

export default AuthorList;
