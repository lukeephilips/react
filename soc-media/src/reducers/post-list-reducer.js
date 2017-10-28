import constants from '../constants';


export default (state = [], action) => {
  switch (action.type) {
    case constants.ADD_POST:
      const { author, title, avatar, content, postTime, id } = action;
      return [
        ...state,
        {
          author: author,
          title: title,
          avatar: avatar,
          content: content,
          postTime: postTime,
          id: id
        }
      ]
    case constants.DELETE_POST:
      console.log(action);
      let newState = state.filter(post => post.id !== action.id)
      console.log(newState);
      return newState;

    default:
      return state;
  }
}
