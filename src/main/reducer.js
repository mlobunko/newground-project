import * as t from "./actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case t.SET_NUMBER_OF_PLAYERS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          players: action.numberOfPlayers
        }
      };
    case t.SET_WARNING_TRUE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          warning: true
        }
      };
    case t.SET_WARNING_FALSE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          warning: false
        }
      };
    default:
      return state;
  }
};
