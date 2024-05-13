import { atom } from "recoil";


export const userState = atom({
  key: "userState",
  default: {
    userName: null,
    userId: null,
    playInstruction: null,
    version: null,
    perPersonCost: null,
  },
});
