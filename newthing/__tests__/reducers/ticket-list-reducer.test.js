import ticketList from './../../src/reducers/ticket-list-reducer';
import constants from './../../src/constants';

describe("Ticket list reducer", () => {
  test('it shoud return equivalent state if no action type', () => {
    expect(ticketList([], {type: null})).toEqual([]);
  });
  test('imported value should match action type string', () => {
  expect(constants.ADD_TICKET).toEqual('ADD_TICKET');
});
});
