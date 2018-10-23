import { all, call, spawn } from "redux-saga/effects";

import main from "main";

export default function* rootSaga() {
  const sagas = [main.saga.runChangeRandomlyDataTable];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
