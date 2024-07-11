import {mockFixtures} from "../__mock__/api/fixtures";
import {mockPlayerStats} from "../__mock__/api/playerStats";

export const fetchFixtures = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFixtures);
    }, 1000);
  })
}


export const fetchPlayerStats = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPlayerStats);
    }, 1000);
  })
}