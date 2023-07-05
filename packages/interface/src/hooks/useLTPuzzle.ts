import { LTPuzzleModel } from "@/models/LTPuzzleModel";
import { LTPuzzleState, ltPuzzleState } from "@/stores/ltPuzzleState";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface LTPuzzleController {
  start: () => Promise<void>;
  mint: () => Promise<void>;
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
    let res: any;
    try {
      res = await axios.post("/api/start");
    } catch (e) {
      if (axios.isAxiosError(e)) throw new Error(e.response!.data.message);
      console.error(e);
      throw new Error("Unknown Error");
    }
    const problem = res.data.problem;
    const explanation = res.data.explanation;

    setLTPuzzle(LTPuzzleModel.create({ problem, explanation }));
  };

  /**
   * mint
   */
  const mint = async (): Promise<void> => {
    //TODO #21 ページ3ではいを押したらNFTをミントする
  };

  const controller: LTPuzzleController = {
    start,
    mint,
  };
  return controller;
};

export const useLTPuzzleState = (): [LTPuzzleState, LTPuzzleController] => [
  useLTPuzzleValue(),
  useLTPuzzleController(),
];
