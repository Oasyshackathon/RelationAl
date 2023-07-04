import { BaseProps } from "@/types/BaseProps";
import clsx from "clsx";

export type ExplanationProps = {} & BaseProps;

/**
 * Explanation
 * @keit0728
 */
export const Explanation = ({ className }: ExplanationProps) => {
  //TODO: #19 問題の状態を管理
  const isCorrect = true;
  const explanation =
    "問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説問題の解説";

  return (
    <div className={clsx(className)}>
      {isCorrect ? <div className={clsx("mb-[10px]")}>正解です！</div> : <></>}
      <div className={clsx("font-bold")}>解説</div>
      <div className={clsx("")}>{explanation}</div>
    </div>
  );
};
