import constants from './../constants';


export default (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TICKET:
      const { user, location, issue, id } = action;
      return [
        ...state,
        {
          user: user,
          location: location,
          issue: issue,
          id: id
        }
      ]
    default:
      return state;
  }
}
