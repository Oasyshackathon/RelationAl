import { ObjectCopier } from "@/models/ObjectCopier";

export class LTPuzzleModel extends ObjectCopier {
  /**
   * Constructor
   * You must create an instance with the static method `create`.
   * ```
   * export const dummy = LTPuzzleModel.create({ language: "English" });
   * ```
   * @param problem 問題文
   * @param explanation 問題の答え（解説）
   * @param answers ユーザーの回答まとめ
   * @param isAnswer 正解かどうか
   * @param qAndAs ユーザーの質問とAIの回答まとめ
   */
  private constructor(
    public readonly problem: string = "",
    public readonly explanation: string = "",
    public readonly answers: string[] = [],
    public readonly isAnswer: boolean = false,
    public readonly qAndAs: string[] = [],
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
