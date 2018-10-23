import { delay } from "redux-saga";
import { take, call, put, select, fork } from "redux-saga/effects";

import { getRandomNumber } from "./model";
import * as t from "./actionTypes";

export const shadowChange = function*(id) {
  yield put({ type: t.SET_WARNING_TRUE, id });
  yield call(delay, 50000);
  yield put({ type: t.SET_WARNING_FALSE, id });
};

export const runChangeRandomlyDataTable = function*() {
  yield take(t.START_CHANGE_RANDOMLY_DATA_TABLE);
  const state = yield select();
  const numberOfTables = Object.keys(state).length;
  while (true) {
    const id = yield "" + getRandomNumber(1, numberOfTables);
    const maxPlayers = state[id]["maxPlayers"];
    const numberOfPlayers = getRandomNumber(0, maxPlayers);
    yield put({
      type: t.SET_NUMBER_OF_PLAYERS,
      id,
      numberOfPlayers
    });
    if (getRandomNumber(1, 8) === 1) {
      yield fork(shadowChange, id);
    }
    yield call(delay, 3000);
  }
};
