import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";

import { getRandomNumber } from "./main/model";
import reducer from "main/reducer";
import rootSaga from "./rootSaga";

const preloadedState = () => {
  const initialState = {};
  let nameSlots = 1;
  let nameCraps = 1;
  let nameRoulettes = 1;
  let namePokerTables = 1;
  let nameBigSixWheels = 1;

  for (let i = 1; i <= 120; i++) {
    if (i <= 24) {
      initialState[i] = {
        id: `${i}`,
        type: "Slot Machine",
        name: `Slot ${nameSlots}`,
        warning: false,
        players: getRandomNumber(0, 1),
        maxPlayers: 1
      };
      nameSlots++;
    } else if (i <= 48) {
      initialState[i] = {
        id: `${i}`,
        type: "Craps",
        name: `Craps ${nameCraps}`,
        warning: false,
        players: getRandomNumber(0, 16),
        maxPlayers: 16
      };
      nameCraps++;
    } else if (i <= 72) {
      initialState[i] = {
        id: `${i}`,
        type: "Roulette",
        name: `Roulette ${nameRoulettes}`,
        warning: false,
        players: getRandomNumber(0, 8),
        maxPlayers: 8
      };
      nameRoulettes++;
    } else if (i <= 96) {
      initialState[i] = {
        id: `${i}`,
        type: "Poker Table",
        name: `Poker ${namePokerTables}`,
        warning: false,
        players: getRandomNumber(0, 9),
        maxPlayers: 9
      };
      namePokerTables++;
    } else {
      initialState[i] = {
        id: `${i}`,
        type: "Big Six Wheel",
        name: `Wheel ${nameBigSixWheels}`,
        warning: false,
        players: getRandomNumber(0, 10),
        maxPlayers: 10
      };
      nameBigSixWheels++;
    }
  }
  return initialState;
};

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState(), composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};
