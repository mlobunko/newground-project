import bigSixWheel from "./images/bigSixWheel.svg";
import craps from "./images/craps.svg";
import pokerTable from "./images/pokerTable.svg";
import roulette from "./images/roulette.svg";
import slotMachine from "./images/slotMachine.svg";

export const getImageFromType = type => {
  switch (type) {
    case "Big Six Wheel":
      return bigSixWheel;
    case "Craps":
      return craps;
    case "Poker Table":
      return pokerTable;
    case "Roulette":
      return roulette;
    case "Slot Machine":
      return slotMachine;
    default:
      return slotMachine;
  }
};
