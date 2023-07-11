// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MAX_ERROR_CNT } from "@/const/error";
import { getIsCorrect } from "@/utils/prompt";
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

  const inference = req.body.inference;
  if (inference === "")
    return res.status(400).json({
      message: "Invalid inference",
    });

  const explanation = req.body.explanation;
  if (explanation === "")
    return res.status(400).json({
      message: "Invalid explanation",
    });

  let errorCnt = 0;
  const prompt = getIsCorrect(inference, explanation);
  console.log("prompt:", prompt);
  let answer;
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
      answer = completion.data.choices[0].message!.content!;
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
  let isCorrect;
  if (answer.toLowerCase() === "true") {
    isCorrect = true;
  } else if (answer.toLowerCase() === "false") {
    isCorrect = false;
  } else {
    return res.status(400).json({ message: "Invalid answer from AI" });
  }

  return res.status(200).json({ isCorrect });
}
