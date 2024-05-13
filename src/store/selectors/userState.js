import { selector } from "recoil";
import { userState } from "../atoms/user";

export const userNameState = selector({
  key: 'userNameState',
  get: ({ get }) => {
    const state = get(userState);
    return state.userName;
  },
});

export const userIdState = selector({
  key: 'userIdState',
  get: ({ get }) => {
    const state = get(userState)
    return state.userId;
  }
})

export const userPlayInstructionState = selector({
    key: 'userPlayInstructionState',
    get: ({ get }) => {
      const state = get(userState)
      return state.playInstruction;
    }
  })

  export const userVersionState = selector({
    key: 'userVersionState',
    get: ({ get }) => {
      const state = get(userState)
      return state.version;
    }
  })

  export const userPerPersonCostState = selector({
    key: 'userPerPersonCostState',
    get: ({ get }) => {
      const state = get(userState)
      return state.perPersonCost;
    }
  })