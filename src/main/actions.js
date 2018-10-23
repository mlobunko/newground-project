import * as t from "./actionTypes";

export const setNumberOfPlayers = ({ id, numberOfPlayers }) => ({
  type: t.SET_NUMBER_OF_PLAYERS,
  id,
  numberOfPlayers
});

export const setWarningTrue = ({ id }) => ({
  type: t.SET_WARNING_TRUE,
  id
});

export const setWarningFalse = ({ id }) => ({
  type: t.SET_WARNING_FALSE,
  id
});

export const startChangeRandomDataTable = () => ({
  type: t.START_CHANGE_RANDOMLY_DATA_TABLE
});
