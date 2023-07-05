import { LTPuzzleModel } from "@/models/LTPuzzleModel";
import { LTPuzzleState, ltPuzzleState } from "@/stores/ltPuzzleState";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface LTPuzzleController {
  start: () => void;
}

export const useLTPuzzleValue = (): LTPuzzleState => {
  return useRecoilValue(ltPuzzleState);
};

export const useLTPuzzleController = (): LTPuzzleController => {
  const setLTPuzzle = useSetRecoilState(ltPuzzleState);

  /**
   * start
   */
  const start = async (): Promise<void> => {
    setLTPuzzle(LTPuzzleModel.create({}));
  };

  const controller: LTPuzzleController = {
    start,
  };
  return controller;
};

export const useLTPuzzleState = (): [LTPuzzleState, LTPuzzleController] => [
  useLTPuzzleValue(),
  useLTPuzzleController(),
];
