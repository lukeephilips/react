import ticketList from './../../src/reducers/ticket-list-reducer';
import constants from './../../src/constants';

describe("Ticket list reducer", () => {
  let action;
  const ticketInfo = {
    user: "Billy Bones",
    location: "over there",
    issue: "fell down, can't get up",
    id: 0
  }
  test('should return equivalent state if no action type', () => {
    expect(ticketList([], {type: null})).toEqual([]);
  });
  test('imported value should match action type string', () => {
  expect(constants.ADD_TICKET).toEqual('ADD_TICKET');
  });
  test("should add ticket to list array", () => {
    const { user, location, issue, id } = ticketInfo;
    action = {
      user: user,
      location: location,
      issue: issue,
      id: id,
      type: constants.ADD_TICKET
    }
    const futureState = [ticketInfo];
    expect(ticketList([], action)).toEqual([ticketInfo]);
  });
});
