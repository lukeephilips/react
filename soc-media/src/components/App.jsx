import React from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import AuthorList from "./AuthorList";


import Header from "./Header"

function App(props){
  let posts = [
    {
      title: "hello world",
      author: "Billy Bones",
      content: "I am a fish",
      avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
    },
    {
      title: "I am hungry",
      author: "Suzy Q",
      content: "I want to eat",
      avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
    },
    {
      title: "WTF",
      author: "Jimmy Dean",
      content: "This is sum bullshit",
      avatar: "http://i231.photobucket.com/albums/ee4/koolitzzz/GangstaChimp.jpg",
    }
  ]
  let style = {
    padding: "30px",
    fontFamily: "Arial",
  }

  return (
    <div style={style}>
      <Header />
      <div>
        <CreatePost />
        <PostList posts={posts}/>
      </div>
      <div>
        <AuthorList posts={posts} />
      </div>
    </div>
  );
}

export default App;
