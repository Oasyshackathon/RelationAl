import { atom } from "recoil";

export const disabledState = atom<boolean>({
  key: "disabledState",
  default: false,
});
