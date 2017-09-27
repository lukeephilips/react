import React from "react";
import Author from "./Author"

function AuthorList(props){
  const style = {
  }

  function postCount(author){
    let count = props.posts.filter(function (post){
      return post.author === author}
    ).length;
    return count;
  }
  let authorsArray = props.posts.map((post, i) =>
    [{ name: post.author,
      avatar: post.avatar,
      count: postCount(post.author),
    }]
  )

  var uniqueAuthors = [];
  authorsArray.filter(function(item){
    var i = uniqueAuthors.findIndex(x => x.name == item[0].name);
    if(i <= -1)
          uniqueAuthors.push({name: item[0].name, avatar: item[0].avatar, count: item[0].count});
  });

  return (
    <div style={style}>
      {uniqueAuthors.map((post, i) =>
        <Author
          author={post.name}
          avatar={post.avatar}
          count={post.count}
          key={i}
        />
      )}
    </div>
  )
}

export default AuthorList;
