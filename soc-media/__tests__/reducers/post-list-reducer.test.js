import postList from './../../src/reducers/post-list-reducer';
import constants from './../../src/constants';
import { createStore } from 'redux';


describe("Post list reducer", () => {
  const initialState = [{
    author: "Billy",
    title: "Test",
    avatar: "avatar",
    content: "content",
    id: 0
  }]
  let action;
  const postInfo = {
    author: "Billy",
    title: "Test",
    avatar: "avatar",
    content: "content",
    id: null
  }
  test('should return equivalent state if no action type', () => {
    expect(postList([], {type: null})).toEqual([]);
  });

  test('imported value should match action type string', () => {
  expect(constants.ADD_POST).toEqual('ADD_POST');
  });

  test("should add post to list array", () => {
    const { author, title, avatar, content, id } = postInfo;
    action = {
      author: author,
      title: title,
      avatar: avatar,
      content: content,
      id: id,
      type: constants.ADD_POST
    }
    const futureState = [postInfo];
    expect(postList([], action)).toEqual([postInfo]);
  });
  test("should delete post from list array", () => {
    action = {
      id: 0,
      type: constants.DELETE_POST
    }
    expect(postList(initialState, action)).toEqual([]);
  });
});
