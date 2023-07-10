import { ObjectCopier } from "@/models/ObjectCopier";
import { QandA } from "@/types/QandA";

export class LTPuzzleModel extends ObjectCopier {
  /**
   * Constructor
   * You must create an instance with the static method `create`.
   * ```
   * export const dummy = LTPuzzleModel.create({ title: "ウミガメのスープ" });
   * ```
   * @param title タイトル
   * @param description 問題文
   * @param explanation 問題の答え（解説）
   * @param inference ユーザーの推理
   * @param inferenceHistories ユーザーの推理履歴
   * @param isAnswer 正解かどうか
   * @param qaHistories ユーザーの質問とAIの回答履歴
   * @param tokenId 問題のID
   * @param transactionHash トランザクションハッシュ
   * @param question 質問
   */
  private constructor(
    public readonly title: string = "",
    public readonly description: string = "",
    public readonly explanation: string = "",
    public readonly inference: string = "",
    public readonly inferenceHistories: string[] = [],
    public readonly isAnswer: boolean = false,
    public readonly qaHistories: QandA[] = [],
    public readonly tokenId: BigInt = BigInt(0),
    public readonly transactionHash: string = "",
    public readonly question: string = "",
  ) {
    super();
  }

  /**
   * Create instance
   * @param modifyObject modifyObject
   * @return {LTPuzzleModel} LTPuzzleModel
   */
  public static create(modifyObject: {
    [P in keyof LTPuzzleModel]?: LTPuzzleModel[P];
  }): LTPuzzleModel {
    return new LTPuzzleModel().copyWith(modifyObject);
  }
}
