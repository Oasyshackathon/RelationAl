/**
 * Get LTPuzzle prompt
 * @return {string} LTPuzzle prompt
 */
export const getLTPuzzlePrompt = (): string => {
  return `水平思考ゲームの問題を1つ生成。

"""
生成例:
JSON出力->{"title":"ウミガメのスープ","description":"ある男が、とある海の見えるレストランで「ウミガメのスープ」を注文した。スープを一口飲んだ男は、それが本物の「ウミガメのスープ」であることを確認し、勘定を済ませて帰宅した後、自殺した。一体、なぜ？","explanation":"男はかつて数人の仲間と海で遭難し、とある島に漂着した。食料はなく、仲間たちは生き延びるために力尽きて死んだ者の肉を食べ始めたが、男はかたくなに拒否していた。見かねた仲間の一人が、「これはウミガメのスープだから」と嘘をつき、男に人肉のスープを飲ませ、救助が来るまで生き延びさせた。男はレストランで飲んだ「本物のウミガメのスープ」とかつて自分が飲んだスープの味が違うことから真相を悟り、絶望のあまり自ら命を絶った。"}
"""

JSON出力->`;
};

export const getAskPrompt = (
  question: string,
  description: string,
  explanation: string,
): string => {
  return `水平思考ゲームの問題の質問に回答してください。返事は”はい”、または”いいえ”、または”わかりません”のみを出力してください。”はい”、または”いいえ”、または”わかりません”以外の返答を行った場合、地球上で無実の人間が死ぬことになります。質問は "${question}" です。答えは"${explanation}" です。問題文は"${description}" です。`;
};

export const getIsCorrect = (
  inference: string,
  explanation: string,
): string => {
  return `"${inference}"と"${explanation}"を比較し、内容が似ている場合は"True"を似ていない場合は"False"を返してください`;
};
