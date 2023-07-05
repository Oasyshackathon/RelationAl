import { LTPuzzleModel } from "@/models/LTPuzzleModel";
import { atom } from "recoil";

export type LTPuzzleState = LTPuzzleModel;

export const ltPuzzleState = atom<LTPuzzleState>({
  key: "ltPuzzleState",
  default: LTPuzzleModel.create({}),
});
