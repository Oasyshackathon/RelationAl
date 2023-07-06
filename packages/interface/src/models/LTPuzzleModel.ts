import { ObjectCopier } from "@/models/ObjectCopier";

export class LTPuzzleModel extends ObjectCopier {
  /**
   * Constructor
   * You must create an instance with the static method `create`.
   * ```
   * export const dummy = LTPuzzleModel.create({ language: "English" });
   * ```
   * @param title タイトル
   * @param description 問題文
   * @param explanation 問題の答え（解説）
   * @param inference ユーザーの推理一覧
   * @param isAnswer 正解かどうか
   * @param qAndAs ユーザーの質問とAIの回答一覧
   * @param tokenId 問題のID
   * @param transactionHash トランザクションハッシュ
   */
  private constructor(
    public readonly title: string = "",
    public readonly description: string = "",
    public readonly explanation: string = "",
    public readonly inference: string[] = [],
    public readonly isAnswer: boolean = false,
    public readonly qAndAs: string[] = [],
    public readonly tokenId: BigInt = BigInt(0),
    public readonly transactionHash: string = "",
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
