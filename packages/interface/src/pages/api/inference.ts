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
