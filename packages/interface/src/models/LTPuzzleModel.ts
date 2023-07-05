import { ObjectCopier } from "@/models/ObjectCopier";

export class LTPuzzleModel extends ObjectCopier {
  /**
   * Constructor
   * You must create an instance with the static method `create`.
   * ```
   * export const dummy = LTPuzzleModel.create({ language: "English" });
   * ```
   * @param question question
   * @param explanation explanation
   * @param answer answer
   * @param isCorrect isCorrect
   * @param qas qas
   */
  private constructor(
    public readonly question: string = "",
    public readonly explanation: string = "",
    public readonly answer: string = "",
    public readonly isCorrect: boolean = false,
    public readonly qas: string[] = [],
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
