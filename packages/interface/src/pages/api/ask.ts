// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MAX_ERROR_CNT } from "@/const/error";
import { getAskPrompt } from "@/utils/prompt";
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
    const question = req.body.question;
    const random = Math.floor(Math.random() * 2);

    return res.status(200).json({
      answer:
        question === "" ? "わかりません" : random === 1 ? "はい" : "いいえ",
    });
  }

  const question = req.body.question;
  if (question === "")
    return res.status(400).json({
      message: "Invalid question",
    });

  const description = req.body.description;
  if (description === "")
    return res.status(400).json({
      message: "Invalid description",
    });

  const explanation = req.body.explanation;
  if (explanation === "")
    return res.status(400).json({
      message: "Invalid explanation",
    });

  let errorCnt = 0;
  const prompt = getAskPrompt(question, description, explanation);
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

  return res.status(200).json({ answer });
}

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method !== "POST")
//     return res.status(400).json({
//       message: "Only POST",
//     });

//   if (!configuration.apiKey) {
//     return res
//       .status(200)
//       .json({ answer: "This is a placeholder answer from AI." });
//   }

//   const question = req.body.question;

//   const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//       { role: "system", content: "You are a helpful assistant."},
//       { role: "user", content: question },
//     ],
//   });

//   const answerFromAI = completion.data.choices[0].message.content;

//   return res
//     .status(200)
//     .json({ answer: answerFromAI });
// }
