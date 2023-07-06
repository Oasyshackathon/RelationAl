// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ERROR_WAIT_TIME, MAX_ERROR_CNT } from "@/const/error";
import { ServerLTPuzzle } from "@/features/lt-puzzles/api/contracts/ServerLTPuzzle";
import { getLTPuzzlePrompt } from "@/utils/prompt";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST")
    return res.status(400).json({
      message: "Only POST",
    });

  if (!configuration.apiKey) {
    const title = "ウミガメのスープ";
    const description =
      "ある男が、とある海の見えるレストランで「ウミガメのスープ」を注文した。スープを一口飲んだ男は、それが本物の「ウミガメのスープ」であることを確認し、勘定を済ませて帰宅した後、自殺した。一体、なぜ？";
    const explanation =
      "男はかつて数人の仲間と海で遭難し、とある島に漂着した。食料はなく、仲間たちは生き延びるために力尽きて死んだ者の肉を食べ始めたが、男はかたくなに拒否していた。見かねた仲間の一人が、「これはウミガメのスープだから」と嘘をつき、男に人肉のスープを飲ませ、救助が来るまで生き延びさせた。男はレストランで飲んだ「本物のウミガメのスープ」とかつて自分が飲んだスープの味が違うことから真相を悟り、絶望のあまり自ら命を絶った。";
    return res
      .status(200)
      .json({ title, description, explanation, tokenId: 0 });
  }

  let errorCnt = 0;
  const prompt = getLTPuzzlePrompt();
  let json;
  while (true) {
    try {
      console.log("errorCnt:", errorCnt);
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 1.0,
      });
      console.log(completion.data);
      console.log(completion.data.choices);
      console.log(completion.data.usage);
      json = JSON.parse(completion.data.choices[0].message!.content!);
      errorCnt = 0;
      break;
    } catch (error) {
      errorCnt++;
      error instanceof Error
        ? console.error(error.message)
        : console.error(error);
      if (errorCnt >= MAX_ERROR_CNT) {
        if (error instanceof Error)
          return res.status(400).json({ message: error.message });
        return res.status(400).json({ message: error });
      }
    }
  }
  const title = json.title;
  const description = json.description;
  const explanation = json.explanation;

  const ltPuzzle = ServerLTPuzzle.instance();
  let tokenId;
  while (true) {
    try {
      console.log("errorCnt:", errorCnt);
      const nonce = ltPuzzle.getNonce();
      console.log("nonce:", nonce);
      await ltPuzzle.generatePuzzle(nonce, title, description, explanation);
      tokenId = await ltPuzzle.getNonceToTokenID(nonce);
      console.log("tokenId:", tokenId);
      errorCnt = 0;
      break;
    } catch (error) {
      errorCnt++;
      error instanceof Error
        ? console.error(error.message)
        : console.error(error);
      if (errorCnt >= MAX_ERROR_CNT) {
        if (error instanceof Error)
          return res.status(400).json({ message: error.message });
        return res.status(400).json({ message: error });
      }
      // "ERROR_WAIT_TIME" ms待機
      await new Promise((resolve) => setTimeout(resolve, ERROR_WAIT_TIME));
    }
  }

  return res
    .status(200)
    .json({ title, description, explanation, tokenId: tokenId.toString() });
}
