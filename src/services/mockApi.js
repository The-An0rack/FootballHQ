import {mockFixtures} from "../__mock__/api/fixtures";

export const fetchFixtures = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFixtures);
    }, 1000);
  })
}