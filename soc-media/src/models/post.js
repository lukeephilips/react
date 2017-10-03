import Moment from "moment";

class Post {
  constructor(author, title, avatar, content) {
    this.author = author;
    this.title = title;
    this.avatar = avatar;
    this.content = content;
    this.postTime = new Moment();
    this.timeSincePost = "just now";
  }
  setTimeSincePost(){
    this.timeSincePost =  this.postTime.fromNow(true);
  }
}

export default Post;
