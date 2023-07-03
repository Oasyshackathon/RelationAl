import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type RuleProps = {} & BaseProps;

/**
 * Rule
 * @keit0728
 */
export const Rule = ({ className }: RuleProps) => {
  return (
    <div className={clsx(className)}>
      水平思考ゲーム（ウミガメのスープ）をAIが出題してきます。はい / いいえ
      で答えられる質問を繰り返し、答えに辿り着きましょう！
    </div>
  );
};
