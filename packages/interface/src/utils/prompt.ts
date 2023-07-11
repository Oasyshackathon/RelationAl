/**
 * Get LTPuzzle prompt
 * @return {string} LTPuzzle prompt
 */
export const getLTPuzzlePrompt = (): string => {
  return `水平思考ゲームの問題を1つ生成してください。ただし、正解は特殊な能力や性格によるものではなく普遍性を持ち、興味深いものにしてください。

"""
生成例:
JSON出力->{"title":"ウミガメのスープ","description":"ある男が、とある海の見えるレストランで「ウミガメのスープ」を注文した。スープを一口飲んだ男は、それが本物の「ウミガメのスープ」であることを確認し、勘定を済ませて帰宅した後、自殺した。一体、なぜ？","explanation":"男はかつて数人の仲間と海で遭難し、とある島に漂着した。食料はなく、仲間たちは生き延びるために力尽きて死んだ者の肉を食べ始めたが、男はかたくなに拒否していた。見かねた仲間の一人が、「これはウミガメのスープだから」と嘘をつき、男に人肉のスープを飲ませ、救助が来るまで生き延びさせた。男はレストランで飲んだ「本物のウミガメのスープ」とかつて自分が飲んだスープの味が違うことから真相を悟り、絶望のあまり自ら命を絶った。"}
"""

JSON出力->`;
};

export const getAskPrompt = (question: string, description: string, explanation: string): string => {
  return `Please answer the questions in the Horizontal Thinking Game question. The question text is"${description}". The question text is"${question}". The answer is"${explanation}". Following the rules of a lateral thinking game, you can only respond with 'はい', 'いいえ', or '関係ありません'. Use 'いいえ' when the direction of the answer is correct, but can be explicitly stated as NO. Use '関係ありません' when the question itself is far removed from the answer. Do not add any text or punctuation to these words, such as 'はい。' or 'いいえ。' or '関係ありません。'. If you respond with anything other than 'はい', 'いいえ', or '関係ありません', an innocent person on Earth will die. Please absolutely do not respond with anything other than 'はい', 'いいえ', or '関係ありません'.`;
};

export const getIsCorrect = (
  inference: string,
  explanation: string,
): string => {
  return `When comparing "${inference}" and "${explanation}", please consider the following conditions:

  1. Whether they mention the same information or theme.
  2. Whether they share the same opinion or perspective.
  3. Whether they are based on the same facts, data, or evidence.
  
  Based on these conditions, if you think the content of "${inference}" and "${explanation}" is similar, return "True". If you think they are not similar, return "False". Specifically, please respond in the form of "True" or "False".`;
};
