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
      「ウミガメのスープ」で有名な水平思考ゲームをAIが出題してきます。はい /
      いいえ で答えられる質問を繰り返し、謎を解き明かしましょう！
    </div>
  );
};
