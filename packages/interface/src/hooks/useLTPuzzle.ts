import { ClientLTPuzzle } from "@/features/lt-puzzles/api/contracts/ClientLTPuzzle";
import { LTPuzzleModel } from "@/models/LTPuzzleModel";
import { LTPuzzleState, ltPuzzleState } from "@/stores/ltPuzzleState";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface LTPuzzleController {
  start: () => Promise<void>;
  mint: (tokenId: BigInt) => Promise<void>;
  reset: () => void;
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
    const title = res.data.title;
    const description = res.data.description;
    const explanation = res.data.explanation;
    const tokenId = res.data.tokenId;

    // TODO: 後で消す
    console.log("title:", title);
    console.log("description:", description);
    console.log("explanation:", explanation);
    console.log("tokenId:", tokenId);

    setLTPuzzle(
      LTPuzzleModel.create({
        title,
        description,
        explanation,
        tokenId: BigInt(tokenId),
      }),
    );
  };

  /**
   * mint
   */
  const mint = async (tokenId: BigInt): Promise<void> => {
    const ltPuzzle = ClientLTPuzzle.instance();
    const receipt = await ltPuzzle.mint(tokenId);

    // TODO: 後で消す
    console.log(receipt);

    setLTPuzzle((prevState) => {
      return prevState.copyWith({ transactionHash: receipt.transactionHash });
    });
  };

  /**
   * reset
   */
  const reset = (): void => {
    setLTPuzzle(LTPuzzleModel.create({}));
  };

  const controller: LTPuzzleController = {
    start,
    mint,
    reset,
  };
  return controller;
};

export const useLTPuzzleState = (): [LTPuzzleState, LTPuzzleController] => [
  useLTPuzzleValue(),
  useLTPuzzleController(),
];
