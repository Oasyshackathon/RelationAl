import { ClientLTPuzzle } from "@/features/lt-puzzles/api/contracts/ClientLTPuzzle";
import { LTPuzzleModel } from "@/models/LTPuzzleModel";
import { LTPuzzleState, ltPuzzleState } from "@/stores/ltPuzzleState";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface LTPuzzleController {
  start: () => Promise<void>;
  ask: (inference: string) => Promise<void>;
  infer: (inference: string, explanation: string) => Promise<boolean>;
  mint: (tokenId: BigInt) => Promise<void>;
  reset: () => void;
  setInference: (inference: string) => void;
  setQuestion: (question: string) => void;
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
   * ask
   * @param question 質問内容
   * @return {Promise<void>}
   */

  const ask = async (question: string, explanation: string, description: string): Promise<void> => {
    if (question === "") throw new Error("質問内容が空です");
    // Send question to GPT-3 via API
    let res: any;
    try {
      res = await axios.post("/api/ask", { question, explanation, description });
    } catch (e) {
      if (axios.isAxiosError(e)) throw new Error(e.response!.data.message);
      console.error(e);
      throw new Error("Unknown Error");
    }

    const answerFromAI = res.data.answer;

    // TODO: 後で消す
    console.log("answerFromAI:", answerFromAI);

    setLTPuzzle((prevState) => {
      const newQaHistories = [
        ...prevState.qaHistories,
        { question, answer: answerFromAI },
      ];
      return prevState.copyWith({ qaHistories: newQaHistories });
    });
  };


  // const ask = async (question: string): Promise<void> => {
  //   const answerFromAI = "This is a placeholder answer from AI.";

  //   setLTPuzzle((prevState) => {
  //     const newQaHistories = [
  //       ...prevState.qaHistories,
  //       { question, answer: answerFromAI },
  //     ];
  //     return prevState.copyWith({ qaHistories: newQaHistories });
  //   });
  // };

  /**
   * infer
   * @param inference 推理
   * @param explanation
   * @return {boolean} isAnswer
   */
  const infer = async (
    inference: string,
    explanation: string,
  ): Promise<boolean> => {
    let res: any;
    try {
      res = await axios.post("/api/inference");
    } catch (e) {
      if (axios.isAxiosError(e)) throw new Error(e.response!.data.message);
      console.error(e);
      throw new Error("Unknown Error");
    }

    const isCorrect = res.data.isCorrect;

    console.log("Inference is correct:", isCorrect);

    return isCorrect;
  };

  /**
   * mint
   * @param tokenId トークンID
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

  /**
   * setInference
   */
  const setInference = (inference: string): void => {
    setLTPuzzle((prevState) => {
      return prevState.copyWith({ inference });
    });
  };

  /**
   * setQuestion
   */
  const setQuestion = (question: string): void => {
    setLTPuzzle((prevState) => {
      return prevState.copyWith({ question });
    });
  };

  const controller: LTPuzzleController = {
    start,
    ask,
    infer,
    mint,
    reset,
    setInference,
    setQuestion,
  };
  return controller;
};

export const useLTPuzzleState = (): [LTPuzzleState, LTPuzzleController] => [
  useLTPuzzleValue(),
  useLTPuzzleController(),
];
